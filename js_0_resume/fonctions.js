function test_sans_argument(){
	console.log("test");
}
function test_avec_argument(arg_1){
	console.log(arg_1);
}
function test_avec_argument_par_defaut(arg_1, arg_2 = 2){
	console.log(arg_1);
	console.log(arg_2);
}
test_sans_argument();
test_avec_argument("1");
test_avec_argument_par_defaut(3, 4);
test_avec_argument_par_defaut(5); //si pas précisé le arg_2 prend la valeur par défaut

function test_avec_return(arg_1, arg_2 = 2){
	return arg_1 + arg_2;
}
console.log(test_avec_return(15,3));

	

		//Portée des variables

function portee_des_variables() {var test = 7;	return test;}
console.log(portee_des_variables()); //marche car le return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale
