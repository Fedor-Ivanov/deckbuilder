import React from 'react'
import './card.css'

function Card({ card }) {

    const test = {
        color: 'red',
        textAlign: 'center'
    };


    return (
        <div className='card'>


            <p>{card.name}</p>

            {<img className='card-img' src={require(`../../images/cards/${card.artid}.jpg`)} alt="card" />}


            {card.color == 'Gold' &&
                <img className='card-border' src={require(`../../images/border/border-gold.png`)} alt="" />
            }
            {card.color == 'Bronze' &&
                <img className='card-border' src={require(`../../images/border/border-bronze.png`)} alt="" />
            }


            {card.faction == 'Neutral' &&
                <img className='card-banner' src={require(`../../images/banner/banner-nt.png`)} alt="" />
            }
            {card.faction == 'Monster' &&
                <img className='card-banner' src={require(`../../images/banner/banner-mo.png`)} alt="" />
            }
            {card.faction == 'Skellige' &&
                <img className='card-banner' src={require(`../../images/banner/banner-sk.png`)} alt="" />
            }
            {card.faction == 'Northern Realms' &&
                <img className='card-banner' src={require(`../../images/banner/banner-nr.png`)} alt="" />
            }
            {card.faction == 'Syndicate' &&
                <img className='card-banner' src={require(`../../images/banner/banner-sy.png`)} alt="" />
            }
            {card.faction == 'Nilfgaard' &&
                <img className='card-banner' src={require(`../../images/banner/banner-ng.png`)} alt="" />
            }
            {card.faction == 'Scoiatael' &&
                <img className='card-banner' src={require(`../../images/banner/banner-st.png`)} alt="" />
            }

            {card.faction == 'Neutral' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-nt.png`)} alt="" />
            }
            {card.faction == 'Monster' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-mo.png`)} alt="" />
            }
            {card.faction == 'Skellige' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-sk.png`)} alt="" />
            }
            {card.faction == 'Northern Realms' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-nr.png`)} alt="" />
            }
            {card.faction == 'Syndicate' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-sy.png`)} alt="" />
            }
            {card.faction == 'Nilfgaard' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-ng.png`)} alt="" />
            }
            {card.faction == 'Scoiatael' && +(card.provision) >= 1 &&
                <img className='card-provision' src={require(`../../images/provision/provision-st.png`)} alt="" />
            }


            {card.rarity == 'Legendary' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-legendary.png`)} alt="" />
            }
            {card.rarity == 'Epic' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-epic.png`)} alt="" />
            }
            {card.rarity == 'Rare' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-rare.png`)} alt="" />
            }
            {card.rarity == 'Common' &&
                <img className='card-rarity' src={require(`../../images/rarity/rarity-common.png`)} alt="" />
            }

            {+(card.provision) >= 1 &&
                <img className='card-provision-icon' src={require(`../../images/provision-icon.png`)} alt="" />
            }


        </div>
    )
}

export default Card
