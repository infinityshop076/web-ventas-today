from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI(title="Miguezon API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

PRODUCTS = [
    {"id": 1, "name": "Smartphone Elite", "price": 899.99, "category": "Electrónica",
     "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800"},
    {"id": 2, "name": "Hoodie Minimalist", "price": 45.00, "category": "Ropa",
     "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800"},
    {"id": 3, "name": "Lámpara de Mesa Modern", "price": 32.50, "category": "Hogar",
     "image": "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=800"},
    {"id": 4, "name": "Auriculares Wireless", "price": 129.99, "category": "Electrónica",
     "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800"},
    {"id": 5, "name": "Zapatillas Urban", "price": 85.00, "category": "Ropa",
     "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800"},
    {"id": 6, "name": "Sillón Nordic", "price": 250.00, "category": "Hogar",
     "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800"},
]

@app.get("/")
async def root():
    return {"message": "Miguezon API is running 🚀"}

@app.get("/products")
async def get_products(category: str = None):
    if category:
        return [p for p in PRODUCTS if p["category"] == category]
    return PRODUCTS

@app.get("/categories")
async def get_categories():
    return list(set(p["category"] for p in PRODUCTS))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
