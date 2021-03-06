import Pinecone from '@platform-coop-toolkit/pinecone';

export default {
  init() {
    // JavaScript to be fired on all pages
    const menu = document.querySelector( '.menu' );
    const toggle = document.querySelector( '.menu-toggle' );
    new Pinecone.Menu(menu, toggle);

    const searchToggle = document.querySelector( '.search-toggle' );
    if ( searchToggle ) {
      new Pinecone.SearchToggle( searchToggle, searchToggle.nextElementSibling );
    }

    const cards = document.querySelectorAll( '.card' );

    if ( cards ) {
      Array.prototype.forEach.call( cards, card => {
        new Pinecone.Card( card, { cardLinkSelector: '.card__link' } ); // TODO: Remove the cardLinkSelector confuration.
      } );
    }

    const disclosureLabels = document.querySelectorAll( '.disclosure-label' );

    if (disclosureLabels) {
      Array.prototype.forEach.call( disclosureLabels, label => {
        new Pinecone.DisclosureButton( label );
      } );
    }

    new Pinecone.Notification();

    /* TODO: Resolve icon issues
    const icons = document.querySelectorAll( 'svg' );

    if ( icons.length > 0 ) {
      Array.prototype.forEach.call( icons, icon => {
        new Pinecone.Icon( icon );
      } );
    } */
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
