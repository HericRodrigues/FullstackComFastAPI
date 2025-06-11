from sqlalchemy import crate_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlachemy.orm import sessiomaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessioLocal = sessiomaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()