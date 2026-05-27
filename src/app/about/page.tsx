import './styles.scss';

const Page = () => {
  return (
    <div className="about-page">
      <h1>A propos</h1>
      <p>Numéro SIRET : 829 035 930 0017</p>
      <p>Code APE : 7021Z</p>
      <p>
        <strong>Edit.</strong> est une micro-entreprise de relecture-correction
        et conseil en éditorialisation de contenus.
      </p>
      <p>
        De la relecture éclairée à la correction approfondie, en passant par la
        réécriture, <strong>Edit.</strong> vous aide à travailler vos textes
        pour les rendre performants, quels que soient vos objectifs
      </p>
      <p>
        <strong>Edit.</strong> se réserve le droit de refuser un texte pour des
        motifs légitimes, notamment si Edit. considère que le texte envoyé
        contient des propos à connotation raciste, xénophobe, négationniste,
        sexiste ou pédocriminel (cette liste n’est pas exhaustive)
      </p>
    </div>
  );
};

export default Page;
