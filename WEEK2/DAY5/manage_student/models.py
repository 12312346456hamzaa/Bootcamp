from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Student(Base):
    __tablename__ = "student"
    matricule = Column(String, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    prenom = Column(String, nullable=False)

    status = relationship("Status", back_populates="student", uselist=False, cascade="all, delete")

class Status(Base):
    __tablename__ = "status"
    id = Column(Integer, primary_key=True, index=True)
    matricule = Column(String, ForeignKey("student.matricule"), unique=True)
    specialite = Column(String)
    trophy = Column(String)

    student = relationship("Student", back_populates="status")
