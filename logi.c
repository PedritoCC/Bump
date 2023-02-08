double force;
double G;
int w=3;
double param_ni;
int hauteur;



double diam_ressort(force, w, G){
    return("d :" +sqrt((8*force*2*w^3)/(G*(0,3*w-1))));
}

double D; //diamètre réelle du ressort
double longueur_vide(D,diam_ressort(force, w, G));