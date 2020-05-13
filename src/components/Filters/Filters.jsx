import React from 'react'
import './filters.css'
import { connect } from 'react-redux';
import { selectFilter, resetFilters } from '../../store/actions/filters'



function Filters({ type, provision, faction, rarity, selectedType, selectedProvision, selectedFaction, selectedRarity, onSelect, onReset }) {

	function onResetClick() {
		onReset();
	}

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

			<button onClick={onResetClick}>reset filters</button>

		</div>
	)
}

function mapStateToProps({ filters }) {
	return {
		type: filters.type,
		provision: filters.provision,
		faction: filters.faction,
		rarity: filters.rarity,
		selectedType: filters.selected.type,
		selectedProvision: filters.selected.provision,
		selectedFaction: filters.selected.faction,
		selectedRarity: filters.selected.rarity


	};
}

const mapDispatchToProps = {

	onSelect: selectFilter,
	onReset: resetFilters

};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
