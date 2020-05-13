import React from 'react'
import './filters.css'
import { connect } from 'react-redux';
import { selectFilter } from '../../store/actions/filters'



function Filters({ type, provision, faction, rarity, selectedType, selectedProvision, selectedFaction, selectedRarity, onSelect }) {

	return (
		<div className='filters'>

			<select value={selectedType} name='type' onChange={({ target }) => onSelect(target.value, target.name)} >
				<option value='' >All</option>
				{type.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>
			<select value={selectedProvision} name='provision' onChange={({ target }) => onSelect(target.value, target.name)} >
				<option value='' >All</option>
				{provision.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>
			<select value={selectedFaction} name='faction' onChange={({ target }) => onSelect(target.value, target.name)} >
				<option value='' >All</option>
				{faction.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>
			<select value={selectedRarity} name='rarity' onChange={({ target }) => onSelect(target.value, target.name)} >
				<option value='' >All</option>
				{rarity.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>

		</div>
	)
}

function mapStateToProps({ filters }) {
	return {
		type: filters.type,
		provision: filters.provision,
		faction: filters.faction,
		rarity: filters.rarity,
		selectedType: filters.selectedType,
		selectedProvision: filters.selectedProvision,
		selectedFaction: filters.selectedFaction,
		selectedRarity: filters.selectedRarity


	};
}

const mapDispatchToProps = {

	onSelect: selectFilter


};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
