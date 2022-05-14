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


#--------------------------------------
# C O R S
#--------------------------------------
CORS(app)


#--------------------------------------
# LOGIN  BASEURL/login
#--------------------------------------
@app.route("/login",methods=["POST"])
def login():
    uname = request.get_json()["uname"]
    password = request.get_json()["password"]
    result = "incorrect"
    try:
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()
        query = "SELECT * FROM "+LOGIN_TABLE+" where userName = '"+uname+"' AND userPass = '"+password+"'"
        print(query)
        cursor.execute(query)
        row = cursor.fetchone()
        if(row != None):
            result = "correct"
    except Error as e:
        print("SQL Error: "+str(e))
        return result
    conn.close()
    return result


#--------------------------------------
# CHECKLIST  BASEURL/checklist
#--------------------------------------
@app.route("/checklist",methods=["GET"])
def getChecklist():
    json_data=[]
    try:
        conn = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
        cursor = conn.cursor()
        query = "select * from " + CHECKLIST_TABLE
        print(query)
        cursor.execute(query)
        row_headers=[x[0] for x in cursor.description] #this will extract row headers
        rv = cursor.fetchall()
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except Error as e:
        print("SQL Error: "+str(e))
        return "Failed"
    conn.close()
    print(json.dumps(json_data))
    return json.dumps(json_data)


#--------------------------------------
# R U N
#--------------------------------------
def run():
    app.run(host=SERVER)
