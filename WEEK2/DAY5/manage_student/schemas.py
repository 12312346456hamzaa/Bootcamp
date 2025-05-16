from pydantic import BaseModel

class StatusResponse(BaseModel):
    specialite: str
    trophy: str

    class Config:
        orm_mode = True

class StudentBase(BaseModel):
    matricule: str
    nom: str
    prenom: str

class StudentStatusCreate(StudentBase):
    specialite: str
    trophy: str

class StudentWithStatus(StudentBase):
    status: StatusResponse | None

    class Config:
        orm_mode = True
