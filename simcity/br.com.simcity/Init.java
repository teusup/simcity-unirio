import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mesh.Mesh;
import mesh.Residencial;

//@WebServlet("/init")
public class Init extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	/* exemplo:	
	 * Residencial casa1 = new Residencial(20);
		Residencial casa2 = new Residencial(5);
		Mesh[] objetos = new Mesh[2];
		objetos[0] = casa1;
		objetos[1] = casa2; */
//		JSON.parse(objetos);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
		System.out.println("ok");
	}
}

