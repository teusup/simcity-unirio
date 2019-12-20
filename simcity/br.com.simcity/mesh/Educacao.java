package mesh;

public class Educacao extends Publico {
	int alunosCapacidade;
	int educacaoRaio;
	int educacaoEficiencia;
	int faixaEtariaTipo;
	
	Educacao(int custoConstrucao,int manutencaoSemanal,int energia_necessaria,int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
		
		
		
		
	}
	public void setAlunosCapacidade(int alunosCapacidade){
		this.alunosCapacidade = alunosCapacidade;
	}
	public void setEducacaoRaio(int educacaoRaio){
		this.educacaoRaio = educacaoRaio;
	}
	public void setEducacaoEficiencia(int educacaoEficiencia){
		this.educacaoEficiencia = educacaoEficiencia;
	}
	public void setFaixaEtariaTipo(int faixaEtariaTipo){
		this.faixaEtariaTipo = faixaEtariaTipo;
	}
	public int getAlunosCapacidade(){
		return alunosCapacidade;
	}
	public int getEducacaoRaio(){
		return educacaoRaio;
	}
	public int getEducacaoEficiencia(){
		return educacaoEficiencia;
	}
	public int getfaixaEtariaTipo(){
		return faixaEtariaTipo;
	}
}
