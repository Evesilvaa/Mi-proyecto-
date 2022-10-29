/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.Eves.Security.Dto;

import javax.validation.constraints.NotBlank;

public class LoginUsuario {

    @NotBlank
    private String nombreUsuario;
    @NotBlank
    private String password;
    
    
    //getter & setter 

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUusario(String nombreUusario) {
        this.nombreUsuario = nombreUusario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
}
