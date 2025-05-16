from sqlalchemy.orm import Session
from models import Student, Status
from schemas import StudentStatusCreate

def create_student_with_status(db: Session, data: StudentStatusCreate):
    student = Student(
        matricule=data.matricule,
        nom=data.nom,
        prenom=data.prenom
    )
    db.add(student)

    status = Status(
        matricule=data.matricule,
        specialite=data.specialite,
        trophy=data.trophy
    )
    db.add(status)

    db.commit()
    db.refresh(student)
    return student

def get_student_by_matricule(db: Session, matricule: str):
    return db.query(Student).filter(Student.matricule == matricule).first()

def update_student(db: Session, matricule: str, updates: dict):
    student = get_student_by_matricule(db, matricule)
    if student:
        for key, value in updates.items():
            setattr(student, key, value)
        db.commit()
    return student

def delete_student(db: Session, matricule: str):
    student = get_student_by_matricule(db, matricule)
    if student:
        db.delete(student)
        db.commit()
    return student
