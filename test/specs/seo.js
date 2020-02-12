var chai = require('chai');
var expect = chai.expect;

describe('HTML markups should be SEO ready', () => {
  before(function() {
    browser.url('/');
  });

  it('it should have meta named description with a valid content', () => {
    let expected_content =
      "Retrouvez plus d'1 million d'annonces immobilières sur Logic-immo.com. Annonces immobilières issues de nos agences partenaires partout en France : achat, vente, location d'appartements ou de maisons.";
    let content = $('meta[name=description]').getAttribute('content');

    expect(content).to.be.equal(expected_content);
  });

  it('it should have the right title', () => {
    let expected_title =
      'Site immobilier et petites annonces immobilières | Logic-Immo';
    let title = browser.getTitle();

    expect(title).to.be.equal(expected_title);
  });
});
