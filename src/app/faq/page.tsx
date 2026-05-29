import Link from 'next/link';
import './styles.scss';

const Page = () => {
  return (
    <div className="faq-section">
      <dl className="faq-section__list">
        {/* Question 1 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Quelle est la différence entre préparation de copie et relecture sur
            épreuves ?
          </dt>
          <dd className="faq-section__answer">
            <p>Le contenu de cette réponse reste à définir.</p>
          </dd>
        </div>

        {/* Question 2 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Quelle est la différence entre une prestation de correction et une
            prestation de secrétariat de rédaction ?
          </dt>
          <dd className="faq-section__answer">
            <p>Le contenu de cette réponse reste à définir.</p>
          </dd>
        </div>

        {/* Question 3 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Pourquoi les tarifs ne sont-ils pas affichés ?
          </dt>
          <dd className="faq-section__answer">
            <p>
              Je suis comme beaucoup d’entre vous, je préfère avoir une idée des
              prix pratiqués avant de contacter un professionnel. Si mes tarifs
              correspondent à une grille tarifaire que j’ai fixée, vos demandes,
              en revanche, sont uniques et entrent très rarement dans des «
              cases » (et bien heureusement !). De fait, mon travail est sur
              mesure, tout comme les devis que je délivre.
            </p>
          </dd>
        </div>

        {/* Question 4 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Le tarif des prestations EDIT. s’appuie-t-il sur un nombre de pages,
            de mots ou de signes espaces comprises ?
          </dt>
          <dd className="faq-section__answer">
            <p>
              Pour vous proposer des devis justes — autant pour vous que pour
              moi —, je préfère, dans la plupart des cas, m’appuyer sur le
              nombre de signes espaces comprises (il m’arrive de faire des
              exceptions, notamment lors de prestations en réécriture).
            </p>
            <p>
              <strong>
                Pourquoi est-ce plus juste de construire des devis selon le
                nombre de signes espaces comprises (s.e.c.) d’un document ?
              </strong>
              <br />
              Parce que vous pouvez aimer effectuer des sauts de page, écrire
              vos documents en police 15 et sauter trois lignes entre chaque
              paragraphe. Un document de 100 pages n’est donc pas toujours
              représentatif du travail que sa relecture me demandera, car si je
              corrige les espaces (fines, sécables, insécables, etc.), je ne
              corrige pas les pages blanches !
            </p>
          </dd>
        </div>

        {/* Question 5 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Comment connaît-on le nombre de signes espaces comprises d’un
            document ?
          </dt>
          <dd className="faq-section__answer">
            <p>Cela dépend du logiciel que vous utilisez :</p>

            <ul className="faq-section__software-list">
              <li>
                <strong>Sur le logiciel Word :</strong> ces informations
                s’affichent dans la barre d’état, tout en bas à gauche de votre
                fichier. Parfois, seul le nombre de mots s’affiche. Si vous
                souhaitez connaître le nombre de signes (or caractères) espaces
                comprises (ce que je vous demande pour réaliser un devis),
                cliquez sur ce nombre de mots, une fenêtre comportant toutes les
                statistiques de votre document devrait apparaître. Vous ne
                trouvez pas ? Rendez-vous dans votre onglet « Révision » et
                cliquez sur « Statistiques ». Ce n’est pas clair ? Le support
                Microsoft l’explique en mots et en vidéo ici :{' '}
                <Link
                  href="https://support.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Afficher les statistiques sur Word
                </Link>
                .
              </li>
              <li>
                <strong>Sur le logiciel Pages (Mac) :</strong> rendez-vous dans
                votre barre d’outils et cliquez sur « Afficher le nombre de
                caractères ». Le support d’Apple l’explique en mots et en images
                ici :{' '}
                <Link
                  href="https://support.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Afficher le nombre de mots et d’autres statistiques dans Pages
                </Link>
                .
              </li>
              <li>
                <strong>Sur InDesign :</strong> le logiciel ne vous permet pas
                de comptabiliser tous les caractères d’un document. En revanche,
                vous pouvez connaître les statistiques de chaque bloc texte,
                séparément. Pour cela, sélectionnez tout le contenu de votre
                bloc texte (Ctrl A sur PC ou Command A sur Mac), puis
                rendez-vous dans l’onglet « Fenêtre » et cliquez sur «
                Informations ».
              </li>
            </ul>
          </dd>
        </div>

        {/* Question 6 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Quels sont les logiciels sur lesquels je travaille ?
          </dt>
          <dd className="faq-section__answer">
            <p>
              Si nous n’avons pas encore validé ensemble une prestation, et que
              je vous demande un extrait de votre texte (cela peut effectivement
              arriver, en fonction de la prestation souhaitée), vous pouvez
              m’envoyer quelques pages de votre texte au format PDF. Cela me
              suffira amplement pour avoir un aperçu de votre écrit.
            </p>
            <p>
              Ensuite, lorsque nous commençons notre collaboration, il est
              préférable de m’envoyer un fichier ouvrable et lisible par
              différents logiciels. Personnellement, je travaille avec la suite
              Microsoft la plus récente (Word, Excel, PowerPoint, etc.). Je peux
              par ailleurs travailler sur InDesign, si votre projet le
              nécessite, et sur PDF si le document est en cours de maquette.
            </p>
          </dd>
        </div>

        {/* Question 7 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">
            Comment le texte doit-il être mis en forme ?
          </dt>
          <dd className="faq-section__answer">
            <p>
              Si nous travaillons autour de votre tapuscrit (diagnostic,
              expertise ou accompagnement littéraire), j’ai besoin de travailler
              sur une version définitive (avant votre retravail, du moins). J’ai
              besoin que vous soyez globalement satisfait.e du fond et de la
              forme de votre tapuscrit. Autrement dit, vous avez volontairement
              réalisé tel saut de page, et vos paragraphes ont un sens pour
              vous.
            </p>
            <p>
              Pour mon confort de lecture, je préfère lire des textes en police
              Arial, Helvetica ou Times New Roman, en police 12 et dont les
              lignes sont espacées d’un intervalle de 1,5. Je peux évidemment
              changer moi-même ces paramètres, mais si vous avez mis en forme
              votre texte, mes changements risqueraient d’affecter vos choix.
            </p>
          </dd>
        </div>

        {/* Question 8 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">Graphie rectifiée ou non ?</dt>
          <dd className="faq-section__answer">
            <p>
              Généralement, je me conforme à la graphie non rectifiée,
              c’est-à-dire aux règles en vigueur avant les rectifications
              orthographiques de 1990 proposées par le Conseil supérieur de la
              langue française. Ces rectifications sont des propositions qui
              n’ont pas été massivement suivies. Aujourd’hui encore, la graphie
              la plus utilisée demeure celle pré-1990 (les accents circonflexes
              et les traits d’union demeurent, certains pluriels ne sont pas
              normalisés, etc.). Vous pouvez évidemment spécifier la règle que
              vous souhaitez que je privilégie.
            </p>
          </dd>
        </div>

        {/* Question 9 */}
        <div className="faq-section__item">
          <dt className="faq-section__question">Et l’écriture inclusive ?</dt>
          <dd className="faq-section__answer">
            <p>
              Si votre projet nécessite une communication inclusive, alors, je
              m’adapte à celui-ci. Points médians, mots épicènes, je ferai tout
              mon possible pour que votre texte corresponde à vos idées et
              engagements.
            </p>
          </dd>
        </div>
      </dl>

      {/* Footer / Outro */}
      <div className="faq-section__footer">
        <p>
          Votre question demeure sans réponse ? Soumettez-la-moi grâce au
          formulaire de contact présent sur la page principale, j’échangerai
          avec plaisir avec vous !
        </p>
      </div>
    </div>
  );
};
export default Page;
