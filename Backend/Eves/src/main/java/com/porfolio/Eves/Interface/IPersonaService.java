
package com.porfolio.Eves.Interface;

import com.porfolio.Eves.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una  lista de personas 
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona 
    public  void savePersona(Persona persona );
    
    //eliminar un usuario pero lo buscamos por id 
    
    public void deletePersona(Long id);
    
    //buscar una persona por id 
    
    public Persona findPersona(Long id);
    
}
