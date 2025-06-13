"""from pydantic import BaseModel
from app.schemas.product import ProductOut

class ProductBase(BaseModel):
    name: str
    description: str
    quantity: int 

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    id: int

class config:
    orm_mode = True

class ProductOut(BaseModel):
    id: int
    name: str
    price: float"""

from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    in_stock: bool

class ProductOut(ProductCreate):
    id: int

    class Config:
        orm_mode = True