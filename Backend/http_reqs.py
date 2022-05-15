###############################################################################
#
# UniStudi Backend
#
# Author: Moses Christopher Bollavarapu <moseschristopherb@gmail.com>
#
###############################################################################

#--------------------------------------
# I M P O R T S
#--------------------------------------
import mysql.connector as mysql
from mysql.connector   import Error
from flask             import Flask,json,request
from flask_cors        import CORS
from obtain_configs    import BackendConfig


#--------------------------------------
# G L O B A L   O B J E C T S
#--------------------------------------
CONFIG_FILE_PATH     = ".config"

app                  = Flask(__name__)
config               = BackendConfig(CONFIG_FILE_PATH) 

SERVER               = config.get_server_location()
HOST                 = config.get_db_location()
USER                 = config.get_db_user()
PASSWORD             = config.get_db_pass()
DATABASE             = config.get_db_name()
LOGIN_TABLE          = config.get_login_table()
CHECKLIST_TABLE      = config.get_checklist_table()
USER_CHECKLIST_TABLE = config.get_user_checklist_table()
FGLIST_TABLE         = config.get_fg_list_table()
FGNEWSLIST_TABLE     = config.get_fg_news_list_table()

#--------------------------------------
# C O R S
#--------------------------------------
CORS(app)


#--------------------------------------
# HELPER METHOD   execute_sql_cmd()
#--------------------------------------
def execute_sql_cmd(cursor, query):
    # print(query)
    cursor.execute(query)


#--------------------------------------
# LOGIN  BASEURL/login
#--------------------------------------
@app.route("/login",methods=["POST"])
def login():
    status = "incorrect"
    try:
        # Get uname and password from http post method
        uname = request.get_json()["uname"]
        password = request.get_json()["password"]

        # Connect to the Database
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()

        # Check login details in the DB
        query = "SELECT * FROM "+LOGIN_TABLE+" where userName = '"+uname+"' AND userPass = '"+password+"'"
        execute_sql_cmd(cursor, query)
        row = cursor.fetchone()
        if(row != None):
            status = "correct"

        # Close the opened connection
        conn.close()

    except Error as e:
        print("SQL Error: "+str(e))
        return status

    return status



#--------------------------------------
# CHECKLIST  BASEURL/checklist
#--------------------------------------
@app.route("/checklist",methods=["POST"])
def get_checklist():
    json_data = []
    try:
        # Get uname from http post method
        uname = request.get_json()["uname"]

        # Connect to the Database
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()

        # Obtain UID corresponding to the username
        query = "select uid from " + LOGIN_TABLE + " where userName = '" + uname + "'"
        execute_sql_cmd(cursor, query)
        rv = cursor.fetchone()
        obtained_uid = int(rv[0])

        # Obtain CIDs corresponding to the selected UID
        query = "select cid from " + USER_CHECKLIST_TABLE + " where uid = " + str(obtained_uid)
        execute_sql_cmd(cursor, query)
        row_headers=[x[0] for x in cursor.description]
        cid_tuples = cursor.fetchall()

        # Obtain CID, SUBJECT, STATUS to give to FRONTEND
        # Default Status to False
        query = "select cid, subject, False as Status from " + CHECKLIST_TABLE
        execute_sql_cmd(cursor, query)
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        # Create a list of CIDs that have checked the CheckBoxes
        cid_list = list()
        for cid_tup in cid_tuples:
            cid_list.append(cid_tup[0])

        # Make the Status of those selected CheckBoxes
        # for a given CID in the list of CIDs1
        for element in json_data:
            if(element["cid"] in cid_list):
                element["Status"] = 1

        # Close the opened connection
        conn.close()

    except Error as e:
        print("SQL Error: "+str(e))

    return json.dumps(json_data)


#--------------------------------------
# CHECKLIST  BASEURL/checklist
#--------------------------------------
@app.route("/saveChecklist",methods=["POST"])
def save_checklist():
    status = "failed"
    try:
        # Get uname and cid list from http post
        uname = request.get_json()["uname"]
        cid_list = request.get_json()["cid"]

        # Connect to the Database
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()

        # Obtain UID corresponding to the username 
        query = "select uid from " + LOGIN_TABLE + " where userName = '" + uname + "'"
        execute_sql_cmd(cursor, query)

        # fetchone because it is currently assumed that name is unique and has obviously one id then.
        rv = cursor.fetchone()
        obtained_uid = int(rv[0])

        # Reset checklist for given UID
        query = "delete from " + USER_CHECKLIST_TABLE + " where uid = " + str(obtained_uid)
        execute_sql_cmd(cursor, query)

        # Set Checklist items for the given set of CIDs(checklist ids)
        for cid in cid_list:
            query = "insert into " + USER_CHECKLIST_TABLE + " values(" + str(obtained_uid) + ", " + str(cid) + ")"
            execute_sql_cmd(cursor, query)

        # Commit the transaction
        conn.commit()
        status = "success"

        # Close the opened connection
        conn.close()

    except Error as e:
        print("SQL Error: "+str(e))
        return status

    return status


#--------------------------------------
# FGLIST  BASEURL/fglist
#--------------------------------------
@app.route("/fglist",methods=["POST"])
def get_fglist():
    json_data = []
    try:
        # Connect to the Database
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()

        # Obtain data from FG list table
        query = "select * from  " + FGLIST_TABLE
        execute_sql_cmd(cursor, query)
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        # Close the opened connection
        conn.close()

    except Error as e:
        print("SQL Error: "+str(e))

    return json.dumps(json_data)


#--------------------------------------
# FGNEWSLIST  BASEURL/fgnewslist
#--------------------------------------
@app.route("/fgnewslist",methods=["POST"])
def get_fgnewslist():
    json_data = []
    try:
        fgid = request.get_json()["fgid"]

        # Connect to the Database
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()

        # Obtain news-subject and link from the FG News table
        query = "select news, link from " + FGNEWSLIST_TABLE + " where fgid = " + str(fgid)
        execute_sql_cmd(cursor, query)
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        # Close the opened connection
        conn.close()

    except Error as e:
        print("SQL Error: "+str(e))

    return json.dumps(json_data)


#--------------------------------------
# R U N
#--------------------------------------
def run():
    app.run(host=SERVER)
