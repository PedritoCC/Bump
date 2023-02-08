#include <math.h>

double force;
double G;
int w=3;
double param_ni;
int hauteur;


double diam_ressort(force, w, G){
    return(sqrt((8*force*2*w^3)/(G*(0,3*w-1))));
}

double D; //diamètre réelle du ressort
double d;
int n; //nombre de révolution
int nt; // nombre total de spire 
double longueur_vide(D, d, n){
    return(n*(0.3*D+0.15*d)+ param_ni*d);
}