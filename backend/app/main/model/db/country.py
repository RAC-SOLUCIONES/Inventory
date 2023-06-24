from ..... import db

class Country(db.Model):
    __tablename__ = "db_country"
    
    id = db.column("country_id", db.Integer, server_default = db.FetchedValue, primary_key = True)
    name = db.column("name", db.String, nullable = False)
    user = db.column("creation_user_id", db.String, nullable = False)
    date = db.column("creation_date", db.DateTime, nullable = False)