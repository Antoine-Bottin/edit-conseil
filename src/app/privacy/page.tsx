import { Metadata } from 'next';
import './styles.scss';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | EDIT.',
  description:
    'Comment Edit. collecte, utilise et protège vos données personnelles lors de votre navigation et de l’utilisation du formulaire de contact.',
  alternates: {
    canonical: '/privacy',
  },
};

const Page = () => {
  return (
    <main className="privacy-policy">
      <h1>La politique de confidentialité</h1>
      <p className="privacy-policy__intro">
        La présente politique de confidentialité a pour objet d’exposer la
        raison de la collecte de données personnelles et les moyens offerts pour
        contrôler cette collecte, supprimer les données ou encore se prémunir de
        la collecte.
      </p>

      <hr className="privacy-policy__separator" />

      {/* ARTICLE 1. PARTIES */}
      <section className="privacy-policy__section" id="article-1">
        <h2>ARTICLE 1. PARTIES</h2>
        <p>
          La présente politique de confidentialité est applicable entre E D I T
          ., auto-entreprise, SIREN : 829 035 930, siège social : 7 place du
          Petit Enfer, 76200 Dieppe, France, email :{' '}
          <a href="mailto:contact@edit-conseil.com">contact@edit-conseil.com</a>
          , ci-après « E D I T . », et toute personne se connectant au Site,
          ci-après « l’Internaute ».
        </p>
      </section>

      {/* ARTICLE 2. DEFINITIONS */}
      <section className="privacy-policy__section" id="article-2">
        <h2>ARTICLE 2. DEFINITIONS</h2>
        <dl className="privacy-policy__definition-list">
          <dt>
            <strong>« Contenus du Site » :</strong>
          </dt>
          <dd>
            éléments de toute nature publiés sur le Site, protégés ou non par un
            droit de propriété intellectuelle, tel que textes, images, designs,
            présentations, vidéos, schémas, structures, bases de données ou
            logiciels.
          </dd>

          <dt>
            <strong>« Internaute » :</strong>
          </dt>
          <dd>toute personne se connectant au Site.</dd>

          <dt>
            <strong>« Site » :</strong>
          </dt>
          <dd>
            site internet accessible à l’URL{' '}
            <a
              href="https://www.edit-conseil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.edit-conseil.com
            </a>
            , ainsi que les sous-sites, sites miroirs, portails et variations
            d’URL y afférant.
          </dd>
        </dl>
      </section>

      {/* ARTICLE 3. CHAMP D’APPLICATION */}
      <section className="privacy-policy__section" id="article-3">
        <h2>ARTICLE 3. CHAMP D’APPLICATION</h2>
        <p>
          La présente politique de confidentialité est applicable à tout
          Internaute. La simple connexion et/ou navigation sur le Site emportera
          acceptation pleine et entière de la présente politique de
          confidentialité. L’Internaute reconnaît du même fait en avoir pris
          pleinement connaissance et les accepter sans restriction.
        </p>
        <p>
          L’Internaute reconnaît la valeur de preuve des systèmes
          d’enregistrement automatique de E D I T . et, sauf pour lui d’apporter
          preuve contraire, il renonce à les contester en cas de litige.
        </p>
        <p>
          L’acceptation de la présente politique de confidentialité suppose de
          la part des Internautes qu’ils jouissent de la capacity juridique
          nécessaire pour cela, ou à défaut qu’ils en aient l’autorisation d’un
          tuteur ou d’un curateur s’ils sont incapables, de leur représentant
          légal s’ils sont mineurs, ou encore qu’ils soient titulaires d’un
          mandat s’ils agissent pour le compte d’une personne morale.
        </p>
      </section>

      {/* ARTICLE 4. DONNEES PERSONNELLES */}
      <section className="privacy-policy__section" id="article-4">
        <h2>ARTICLE 4. DONNEES PERSONNELLES</h2>

        {/* 4.1. Responsable */}
        <div className="privacy-policy__subsection">
          <h3>4.1. Responsable du traitement</h3>
          <p>
            Le responsable de la collecte et des données traitées sur le Site
            est E D I T ., auto-entreprise, SIREN : 829 035 930, siège social :
            7 place du Petit Enfer, 76200 Dieppe, France, email :{' '}
            <a href="mailto:contact@edit-conseil.com">
              contact@edit-conseil.com
            </a>
          </p>
        </div>

        {/* 4.2. Collecte */}
        <div className="privacy-policy__subsection">
          <h3>4.2. Collecte de données par E D I T .</h3>

          <h4>4.2.1. Données collectées</h4>

          <h5>4.2.1.1. Données collectées lors de la navigation</h5>
          <p>
            Lors de la navigation sur le Site, l’Internaute consent à ce que E D
            I T . collecte les informations relatives à :
          </p>
          <ul className="privacy-policy__list">
            <li>– à son utilisation du Site,</li>
            <li>– au contenu qu’il consulte et sur lequel il clique,</li>
            <li>– à ses données démographiques,</li>
            <li>– à l’appareil utilisé et à son environnement logiciel,</li>
            <li>
              – à des traceurs, des balises web, des stockages web, des
              identifiants publicitaires uniques,
            </li>
            <li>
              – aux données de connexion (horaires, pages consultées, adresse
              IP…),
            </li>
            <li>
              – et/ou aux pages web visitées avant ou après l’utilisation du
              Site.
            </li>
          </ul>

          <h5>
            4.2.1.2. Données collectées lors de l’utilisation du formulaire de
            contact ou de l’envoi d’un email
          </h5>
          <p>
            L’utilisation du formulaire de contact par l’Internaute suppose la
            collecte par E D I T . des données personnelles suivantes :
          </p>
          <ul className="privacy-policy__list">
            <li>– nom,</li>
            <li>– adresse e-mail,</li>
            <li>
              – Information transmise volontairement par l’Internaute lors de sa
              prise de contact.
            </li>
          </ul>
          <p>
            Les Internautes ne souhaitant pas fournir les informations requises
            pour l’utilisation du formulaire de contact ne pourront pas envoyer
            un message à E D I T . directement depuis le Site.
          </p>
        </div>

        {/* 4.2.2. Finalités */}
        <div className="privacy-policy__subsection">
          <h3>4.2.2. Finalités de la collecte de données personnelles</h3>
          <p>
            Les données collectées font l’objet d’un traitement automatisé ayant
            pour finalité de :
          </p>
          <ul className="privacy-policy__list">
            <li>– vérifier l’identité des Internautes,</li>
            <li>– assurer et améliorer la sécurité du Site,</li>
            <li>
              – développer, exploiter, améliorer, fournir et gérer le Site,
            </li>
            <li>– contextualiser et améliorer l’expérience de l’Internaute,</li>
            <li>– éviter toute activité illicite ou illégale,</li>
            <li>
              – faire respecter les conditions relatives à l’utilisation du
              Site.
            </li>
          </ul>
        </div>

        {/* 4.3.3. Destinataires */}
        <div className="privacy-policy__subsection">
          <h3>4.3.3. Destinataires des données</h3>
          <p>
            Les données collectées sont consultables par E D I T . ainsi que
            par les sous-traitants suivants, dans la limite nécessaire à
            l&apos;exécution de leurs prestations :
          </p>
          <ul className="privacy-policy__list">
            <li>
              – Resend, pour l&apos;acheminement des emails envoyés depuis le
              formulaire de contact,
            </li>
            <li>
              – Vercel Analytics, pour la mesure d&apos;audience anonymisée du
              Site.
            </li>
          </ul>
        </div>

        {/* 4.3.4. Durée */}
        <div className="privacy-policy__subsection">
          <h3>4.3.4. Durée de conservation des données personnelles</h3>
          <p>
            Les données personnelles collectées lors de la navigation sont
            conservées pendant une durée raisonnable nécessaire à la bonne
            administration du Site et pour un maximum de 12 mois. Les données
            personnelles collectées lors de l’utilisation du formulaire de
            contact sont conservées pendant la durée de la relation
            contractuelle et jusqu’à 12 mois après la résiliation du contrat par
            l’Internaute.
          </p>
        </div>

        {/* 4.3.5. Sécurité */}
        <div className="privacy-policy__subsection">
          <h3>4.3.5. Sécurité et confidentialité des données personnelles</h3>
          <p>
            Les données personnelles sont conservées dans des conditions
            sécurisées, selon les moyens actuels de la technique, dans le
            respect des dispositions de la Loi Informatique et Libertés du 6
            janvier 1978.
          </p>
        </div>

        {/* 4.3.6. Droits */}
        <div className="privacy-policy__subsection">
          <h3>4.3.6. Droit d’accès, de rectification et d’opposition</h3>
          <p>
            Conformément à la Loi Informatique et Libertés du 6 janvier 1978,
            les Internautes disposent d’un droit d’opposition, d’interrogation,
            d’accès et de rectification des données qu’ils ont fournies. Pour
            cela, il leur suffit d’en faire la demande à E D I T . depuis un
            formulaire de contact accessible sur le présent Site, par email à{' '}
            <a href="mailto:contact@edit-conseil.com">
              contact@edit-conseil.com
            </a>{' '}
            ou par courrier à E D I T . , 7 place du Petit Enfer, 76200 Dieppe,
            France.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
