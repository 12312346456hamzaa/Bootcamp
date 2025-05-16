from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models, schemas, crud

Base.metadata.create_all(bind=engine)
app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/students/", response_model=schemas.StudentWithStatus)
def add_student(data: schemas.StudentStatusCreate, db: Session = Depends(get_db)):
    return crud.create_student_with_status(db, data)

@app.get("/students/{matricule}", response_model=schemas.StudentWithStatus)
def get_student(matricule: str, db: Session = Depends(get_db)):
    student = crud.get_student_by_matricule(db, matricule)
    if not student:
        raise HTTPException(status_code=404, detail="Étudiant introuvable")
    return student

@app.put("/students/{matricule}", response_model=schemas.StudentWithStatus)
def update_student(matricule: str, updates: dict, db: Session = Depends(get_db)):
    student = crud.update_student(db, matricule, updates)
    if not student:
        raise HTTPException(status_code=404, detail="Étudiant introuvable")
    return student

@app.delete("/students/{matricule}")
def delete_student(matricule: str, db: Session = Depends(get_db)):
    student = crud.delete_student(db, matricule)
    if not student:
        raise HTTPException(status_code=404, detail="Étudiant introuvable")
    return {"message": "Étudiant supprimé"}
