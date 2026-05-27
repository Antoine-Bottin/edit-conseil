import './styles.scss';

const Page = () => {
  return (
    <main className="legal-notice">
      <h1>Mentions légales</h1>
      <p className="legal-notice__subtitle">Informations légales</p>

      {/* 1. Présentation du site */}
      <section className="legal-notice__section" id="presentation">
        <h2>1. Présentation du site</h2>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, il est précisé aux
          utilisateurs du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          l&apos;identité des différents intervenants dans le cadre de sa
          réalisation et de son suivi :
        </p>

        <ul className="legal-notice__list">
          <li>
            <strong>Propriétaire :</strong> Hélène Bottin EI – 82903593000017 –
            7 place du Petit Enfer, 76200 Dieppe
          </li>
          <li>
            <strong>Créateur :</strong> Hélène Bottin EI
          </li>
          <li>
            <strong>Responsable publication :</strong> Hélène Bottin EI –{' '}
            <a href="mailto:contact@edit-conseil.com">
              contact@edit-conseil.com
            </a>{' '}
            (Le responsable publication est une personne physique ou une
            personne morale.)
          </li>
          <li>
            <strong>Webmaster :</strong> Hélène Bottin EI –{' '}
            <a href="mailto:contact@edit-conseil.com">
              contact@edit-conseil.com
            </a>
          </li>
          <li>
            <strong>Crédits :</strong> Les mentions légales ont été générées et
            offertes par Subdelirium
          </li>
        </ul>
      </section>

      {/* 2. CGU */}
      <section className="legal-notice__section" id="cgu">
        <h2>
          2. Conditions générales d’utilisation du site et des services proposés
        </h2>
        <p>
          L’utilisation du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          implique l’acceptation pleine et entière des conditions générales
          d’utilisation ci-après décrites. Ces conditions d’utilisation sont
          susceptibles d’être modifiées ou complétées à tout moment, les
          utilisateurs du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          sont donc invités à les consulter de manière régulière.
        </p>
        <p>
          Ce site est normalement accessible à tout moment aux utilisateurs. Une
          interruption pour raison de maintenance technique peut être toutefois
          décidée par Hélène Bottin, qui s’efforcera alors de communiquer
          préalablement aux utilisateurs les dates et heures de l’intervention.
        </p>
        <p>
          Le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          est mis à jour régulièrement par Hélène Bottin. De la même façon, les
          mentions légales peuvent être modifiées à tout moment : elles
          s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le
          plus souvent possible afin d’en prendre connaissance.
        </p>
      </section>

      {/* 3. Services */}
      <section className="legal-notice__section" id="services">
        <h2>3. Description des services fournis</h2>
        <p>
          Le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          a pour objet de fournir une information concernant l’ensemble des
          activités de la société.
        </p>
        <p>
          Hélène Bottin s’efforce de fournir sur le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          des informations aussi précises que possible. Toutefois, il ne pourra
          être tenue responsable des omissions, des inexactitudes et des
          carences dans la mise à jour, qu’elles soient de son fait ou du fait
          des tiers partenaires qui lui fournissent ces informations.
        </p>
        <p>
          Tous les informations indiquées sur le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          sont données à titre indicatif, et sont susceptibles d’évoluer. Par
          ailleurs, les renseignements figurant sur le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications
          ayant été apportées depuis leur mise en ligne.
        </p>
      </section>

      {/* 4. Données techniques */}
      <section className="legal-notice__section" id="technique">
        <h2>4. Limitations contractuelles sur les données techniques</h2>
        <p>Le site utilise la technologie JavaScript.</p>
        <p>
          Le site Internet ne pourra être tenu responsable de dommages matériels
          liés à l’utilisation du site. De plus, l’utilisateur du site s’engage
          à accéder au site en utilisant un matériel récent, ne contenant pas de
          virus et avec un navigateur de dernière génération mis-à-jour.
        </p>
      </section>

      {/* 5. Propriété intellectuelle */}
      <section className="legal-notice__section" id="propriete-intellectuelle">
        <h2>5. Propriété intellectuelle et contrefaçons</h2>
        <p>
          Hélène Bottin est propriétaire des droits de propriété intellectuelle
          ou détient les droits d’usage sur tous les éléments accessibles sur le
          site, notamment les textes, images, graphismes, logo, icônes, sons,
          logiciels.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de : Hélène Bottin.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l’un quelconque des
          éléments qu’il contient sera considérée comme constitutive d’une
          contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
      </section>

      {/* 6. Responsabilité */}
      <section className="legal-notice__section" id="responsabilite">
        <h2>6. Limitations de responsabilité</h2>
        <p>
          Hélène Bottin ne pourra être tenue responsable des dommages directs et
          indirects causés au matériel de l’utilisateur, lors de l’accès au site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          , et résultant soit de l’utilisation d’un matériel ne répondant pas
          aux spécifications indiquées au point 4, soit de l’apparition d’un bug
          ou d’une incompatibilité.
        </p>
        <p>
          Hélène Bottin ne pourra également être tenue responsable des dommages
          indirects (tels par exemple qu’une perte de marché ou perte d’une
          chance) consécutifs à l’utilisation du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          .
        </p>
        <p>
          Des espaces interactifs (possibilité de poser des questions dans
          l’espace contact) sont à la disposition des utilisateurs. Hélène
          Bottin se réserve le droit de supprimer, sans mise en demeure
          préalable, tout contenu déposé dans cet espace qui contraviendrait à
          la législation applicable en France, en particulier aux dispositions
          relatives à la protection des données. Le cas échéant, Hélène Bottin
          se réserve également la possibilité de mettre en cause la
          responsabilité civile et/ou pénale de l’utilisateur, notamment en cas
          de message à caractère raciste, injurieux, diffamant, ou
          pornographique, quel que soit le support utilisé (texte,
          photographie…).
        </p>
      </section>

      {/* 7. Données personnelles */}
      <section className="legal-notice__section" id="donnees-personnelles">
        <h2>7. Gestion des données personnelles</h2>
        <p>
          En France, les données personnelles sont notamment protégées par la
          loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
          l&apos;article L. 226-13 du Code pénal et la Directive Européenne du
          24 octobre 1995.
        </p>
        <p>
          A l&apos;occasion de l&apos;utilisation du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          , peuvent êtres recueillies : l&apos;URL des liens par
          l&apos;intermédiaire desquels l&apos;utilisateur a accédé au site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          , le fournisseur d&apos;accès de l&apos;utilisateur, l&apos;adresse de
          protocole Internet (IP) de l&apos;utilisateur.
        </p>
        <p>
          En tout état de cause Hélène Bottin ne collecte des informations
          personnelles relatives à l&apos;utilisateur que pour le besoin de
          certains services proposés par le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          . L&apos;utilisateur fournit ces informations en toute connaissance de
          cause, notamment lorsqu&apos;il procède par lui-même à leur saisie. Il
          est alors précisé à l&apos;utilisateur du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          l’obligation ou non de fournir ces informations.
        </p>
        <p>
          Conformément aux dispositions des articles 38 et suivants de la loi
          78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
          libertés, tout utilisateur dispose d’un droit d’accès, de
          rectification et d’opposition aux données personnelles le concernant,
          en effectuant sa demande écrite et signée, accompagnée d’une copie du
          titre d’identité avec signature du titulaire de la pièce, en précisant
          l’adresse à laquelle la réponse doit être envoyée.
        </p>
        <p>
          Aucune information personnelle de l&apos;utilisateur du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée,
          transférée, cédée ou vendue sur un support quelconque à des tiers.
          Seule l&apos;hypothèse du rachat de Hélène Bottin et de ses droits
          permettrait la transmission des dites informations à l&apos;éventuel
          acquéreur qui serait à son tour tenu de la même obligation de
          conservation et de modification des données vis à vis de
          l&apos;utilisateur du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>
          .
        </p>
        <p>
          Le site n&apos;est pas déclaré à la CNIL car il ne recueille pas
          d&apos;informations personnelles.
        </p>
        <p>
          Les bases de données sont protégées par les dispositions de la loi du
          1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
          relative à la protection juridique des bases de données.
        </p>
      </section>

      {/* 8. Cookies */}
      <section className="legal-notice__section" id="cookies">
        <h2>8. Liens hypertextes</h2>
        <p>
          Le site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          contient un certain nombre de liens hypertextes vers d’autres sites,
          mis en place avec l’autorisation de Hélène Bottin. Cependant, Hélène
          Bottin n’a pas la possibilité de vérifier le contenu des sites ainsi
          visités, et n’assumera en conséquence aucune responsabilité de ce
          fait.
        </p>

        <ul className="legal-notice__sublist">
          <li>
            <strong>Sous Internet Explorer :</strong> onglet outil (pictogramme
            en forme de rouage en haut à droite) / options internet. Cliquez sur
            Confidentialité et choisissez Bloquer tous les cookies. Validez sur
            Ok.
          </li>
          <li>
            <strong>Sous Firefox :</strong> en haut de la fenêtre du navigateur,
            cliquez sur le bouton Firefox, puis aller dans l&apos;onglet
            Options. Cliquer sur l&apos;onglet Vie privée. Paramétrez les Règles
            de conservation sur : utiliser les paramètres personnalisés pour
            l&apos;historique. Enfin décochez-la pour désactiver les cookies.
          </li>
          <li>
            <strong>Sous Safari :</strong> Cliquez en haut à droite du
            navigateur sur le pictogramme de menu (symbolisé par un rouage).
            Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
            avancés. Dans la section &quot;Confidentialité&quot;, cliquez sur
            Paramètres de contenu. Dans la section &quot;Cookies&quot;, vous
            pouvez bloquer les cookies.
          </li>
          <li>
            <strong>Sous Chrome :</strong> Cliquez en haut à droite du
            navigateur sur le pictogramme de menu (symbolisé par trois lignes
            horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les
            paramètres avancés. Dans la section &quot;Confidentialité&quot;,
            cliquez sur préférences. Dans l&apos;onglet
            &quot;Confidentialité&quot;, vous pouvez bloquer les cookies.
          </li>
        </ul>
      </section>

      {/* 9. Juridiction */}
      <section className="legal-notice__section" id="juridiction">
        <h2>9. Droit applicable et attribution de juridiction</h2>
        <p>
          Tout litige en relation avec l’utilisation du site{' '}
          <a
            href="https://www.edit-conseil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edit-conseil.com
          </a>{' '}
          est soumis au droit français. Il est fait attribution exclusive de
          juridiction aux tribunaux compétents de Paris.
        </p>
      </section>

      {/* 10. Lois */}
      <section className="legal-notice__section" id="lois">
        <h2>10. Les principales lois concernées</h2>
        <p>
          Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l&apos;informatique, aux fichiers
          et aux libertés.
        </p>
        <p>
          Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
          numérique.
        </p>
      </section>

      {/* 11. Médiation */}
      <section className="legal-notice__section" id="mediation">
        <h2>11. Médiation</h2>
        <p>
          Conformément aux articles L.616-1 et R.616-1 du code de la
          consommation, notre entreprise a mis en place un dispositif de
          médiation de la consommation. L&apos;entité de médiation retenue est :{' '}
          <strong>CNPM - MEDIATION - CONSOMMATION</strong>. En cas de litige,
          vous pouvez déposer votre réclamation sur son site :{' '}
          <a
            href="http://cnpm-mediation-consommation.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://cnpm-mediation-consommation.eu
          </a>{' '}
          ou par voie postale en écrivant à CNPM MEDIATION CONSOMMATION Centre
          d’Affaires Stéphanois SAS IMMEUBLE L’HORIZON – ESPLANADE DE FRANCE 3,
          RUE J. CONSTANT MILLERET – 42000 SAINT-ÉTIENNE
        </p>
      </section>

      {/* 12. Lexique */}
      <section className="legal-notice__section" id="lexique">
        <h2>12. Lexique</h2>
        <dl className="legal-notice__definition-list">
          <dt>
            <strong>Utilisateur :</strong>
          </dt>
          <dd>Internaute se connectant, utilisant le site susnommé.</dd>

          <dt>
            <strong>Informations personnelles :</strong>
          </dt>
          <dd>
            {
              "« les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent »"
            }{' '}
            (article 4 de la loi n° 78-17 du 6 janvier 1978).
          </dd>
        </dl>
      </section>
    </main>
  );
};

export default Page;
