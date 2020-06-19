import React from 'react'
import './card.css'
import { connect } from 'react-redux'
import { cardAdd } from '../../store/actions/deck'



function Card({ card, onCardAdd, deck }) {

    return (

        <div className='card' onClick={() => onCardAdd(card)}>

            <h1 style={header}>{card.provision}</h1>


            {/* img */}
            {<img className='card-img' src={require(`../../images/cards/${card.artid}.jpg`)} alt="card" />}

            {/* border */}
            {card.color === 'Gold' &&
                <img className='card-border' src={require(`../../images/border/border-gold.png`)} alt="" />
            }
            {card.color === 'Bronze' &&
                <img className='card-border' src={require(`../../images/border/border-bronze.png`)} alt="" />
            }

            {/* banner */}
            {card.faction === 'Neutral' &&
                <img className='card-banner' src={require(`../../images/banner/banner-nt.png`)} alt="" />
            }
            {card.faction === 'Monster' &&
                <img className='card-banner' src={require(`../../images/banner/banner-mo.png`)} alt="" />
            }
            {card.faction === 'Skellige' &&
                <img className='card-banner' src={require(`../../images/banner/banner-sk.png`)} alt="" />
            }
            {card.faction === 'Northern Realms' &&
                <img className='card-banner' src={require(`../../images/banner/banner-nr.png`)} alt="" />
            }
            {card.faction === 'Syndicate' &&
                <img className='card-banner' src={require(`../../images/banner/banner-sy.png`)} alt="" />
            }
            {card.faction === 'Nilfgaard' &&
                <img className='card-banner' src={require(`../../images/banner/banner-ng.png`)} alt="" />
            }
            {card.faction === 'Scoiatael' &&
                <img className='card-banner' src={require(`../../images/banner/banner-st.png`)} alt="" />
            }

            {/* provision */}
            {card.faction === 'Neutral' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-nt.png`)} alt="" />
            }
            {card.faction === 'Monster' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-mo.png`)} alt="" />
            }
            {card.faction === 'Skellige' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-sk.png`)} alt="" />
            }
            {card.faction === 'Northern Realms' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-nr.png`)} alt="" />
            }
            {card.faction === 'Syndicate' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-sy.png`)} alt="" />
            }
            {card.faction === 'Nilfgaard' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-ng.png`)} alt="" />
            }
            {card.faction === 'Scoiatael' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-st.png`)} alt="" />
            }

            {/* rarity */}
            {card.rarity === 'Legendary' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-legendary.png`)} alt="" />
            }
            {card.rarity === 'Epic' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-epic.png`)} alt="" />
            }
            {card.rarity === 'Rare' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-rare.png`)} alt="" />
            }
            {card.rarity === 'Common' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-common.png`)} alt="" />
            }

            {/* provision-icon */}
            {+(card.provision) >= 1 &&
                <img className='card-provision-icon' src={require(`../../images/provision-icon.png`)} alt="" />
            }

            {/* provision-value */}
            {+(card.provision) >= 1 &&
                <span className='card-provision-value'>{card.provision}</span>
            }

            {/* power-value */}
            {+(card.power) >= 1 &&
                <span className='card-power-value'>{card.power}</span>
            }

            {/* type */}
            {card.type === 'Special' &&
                <img className='card-type' src={require(`../../images/trinket/trinket-spell.png`)} alt="" />
            }
            {card.type === 'Artifact' &&
                <img className='card-type' src={require(`../../images/trinket/trinket-artifact.png`)} alt="" />
            }
            {card.type === 'Stratagem' &&
                <img className='card-type' src={require(`../../images/trinket/trinket-stratagem.png`)} alt="" />
            }


        </div>
    )
}

const header = {
    zIndex: '10',
    position: 'absolute',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: '60px',
    textShadow: "2px 0 0 red, -2px 0 0 red, 0 2px 0 red, 0 -2px 0 red, 1px 1px red, -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red"

};

function mapStateToProps({ deck }) {

    return {
        deck: deck.deck
    };
}

const mapDispatchToProps = {
    onCardAdd: cardAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)