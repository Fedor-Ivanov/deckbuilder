import React from 'react'
import Filters from '../Filters/Filters'
import Cards from '../Cards/Cards'
import { connect } from 'react-redux';


function Library({ cards }) {
    return (
        <div>
            <Filters></Filters>
            <Cards cards={cards}></Cards>
        </div>
    )
}

function mapStateToProps({ cards, filters }) {

    const multiPropsFilter = (products, filters) => {
        const filterKeys = Object.keys(filters);
        return products.filter(product => {
            return filterKeys.every(key => {
                if (!filters[key].length) return true;
                if (Array.isArray(product[key])) {
                    return product[key].some(keyEle => filters[key].includes(keyEle));
                }
                return filters[key].includes(product[key]);
            });
        });
    };

    return {
        cards: Object.values(filters.selected) == '' ? cards.cards : multiPropsFilter(cards.cards, filters.selected),
        // selectedType: filters.selected.type,
        // selectedProvision: filters.selected.provision,
        // selectedFaction: filters.selected.faction,
        // selectedRarity: filters.selected.rarity
    };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Library)