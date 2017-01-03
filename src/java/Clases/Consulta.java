/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Carlos
 */
public class Consulta extends Conexion{
    
    Conexion conectar = new Conexion();
    ResultSet respuesta;
    Statement instruccion;
    public boolean Autentificacion (String user,String pass) throws SQLException
    {
        Connection con = conectar.conectarABD();
        instruccion = con.createStatement();
        
        String Consulta = "Select * from usuario";
        respuesta = instruccion.executeQuery(Consulta);
        conectar.cerrarConexion(con);
        while(respuesta.next())
        {
            if(user.equals(respuesta.getString("id_usuario")) && pass.equals(respuesta.getString("contraseña")))
                return true;            
        }
        return false;
    }
    
    /*public static void main(String[] args) throws SQLException 
    {

        Consulta con = new Consulta();
        
            
    }*/
}

