from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessioLocal
from app import models
from app.schemas import product as product_schemas

router = APIRouter(prefix="/products", tags=["products"])

def get_db():
    db= SessioLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=product_schemas.ProductOur)
def create_product(prod: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.product.Prodcut(**prod.dict())
    db.add(db_product)
    db.commit(db)
    db.refresh(db_product)
    return db_product

@router.get("/", response_model=list[schemas.ProductOur])
def get_products(db: Session = Depends(get_db)):
    return db.query(models.product.Product).all()
