###############################################################################
#
# Config Parser for getting Backend Configuration
# Failing to provide a proper config file results in failure to start server
#
# Author: Moses Christopher Bollavarapu <moseschristopherb@gmail.com>
#
###############################################################################

#--------------------------------------
# I M P O R T S
#--------------------------------------
import configparser


#--------------------------------------
# C L A S S   :  BackendConfig
#--------------------------------------
class BackendConfig():
        """
        Config Processor for Backend. Used to obtain data from config file.
        Data such as server location, database location, user name, etc.
        """
        def __init__(self, config_file_path):
                config = configparser.ConfigParser()
                config.read(config_file_path)
                self._server_location = None
                self._db_location = None
                self._db_name = None
                self._db_user = None
                self._db_pass = None
                self._tables_login = None
                self._tables_checklist = None
                self._tables_userchecklist = None

                try:
                        # Server Config
                        self._server_location = config['SERVER']['Location']

                        # Database Config
                        self._db_location = config['DATABASE']['Location']
                        self._db_name = config['DATABASE']['Name']
                        self._db_user = config['DATABASE']['User']
                        self._db_pass = config['DATABASE']['Pass']

                        # Table Names
                        self._tables_login = config['TABLES']['Login']
                        self._tables_checklist = config['TABLES']['Checklist']
                        self._tables_userchecklist = config['TABLES']['UserChecklist']

                except:
                        print("Failed to obtain data from config file")
                        exit()


        def get_server_location(self):
                return self._server_location

        def get_db_location(self):
                return self._db_location

        def get_db_name(self):
                return self._db_name

        def get_db_user(self):
                return self._db_user

        def get_db_pass(self):
                return self._db_pass

        def get_login_table(self):
                return self._tables_login

        def get_checklist_table(self):
                return self._tables_checklist

        def get_user_checklist_table(self):
                return self._tables_userchecklist