from pydantic import BaseModel

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