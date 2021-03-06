import React from 'react'
import './filters.css'
import { connect } from 'react-redux';
import { selectFilter, resetFilters } from '../../store/actions/filters'
import { useEffect } from 'react';



function Filters({
	type,
	provision,
	faction,
	rarity,
	selectedType,
	selectedProvision,
	selectedFaction,
	selectedRarity,
	onSelect,
	onReset,
	deckSelectedFaction
}) {

	let filteredProvision = provision.filter(prov => prov > 1 && prov < 15)

	let filteredType = type.filter(item => item !== 'Ability')

	useEffect(() => {
		onReset()
	}, [])

	function onResetClick() {
		onReset();
	}

	function onFilterSelect(value, name) {
		onSelect(value, name);

	}

	return (
		<div className='filters'>

			<select value={selectedType} name='type' onChange={({ target }) => onFilterSelect(target.value, target.name)} >
				<option value='' >All</option>
				{filteredType.map(item => {
					return <option key={item}>{item}</option>
				})}
			</select>
			<select value={selectedProvision} name='provision' onChange={({ target }) => onFilterSelect(target.value, target.name)} >
				<option value='' >All</option>
				{filteredProvision.map(item => {
					return <option value={item} key={item}>{item}</option>
				})}
			</select>
			<select value={selectedFaction} name='faction' onChange={({ target }) => onFilterSelect(target.value, target.name)} >
				<option value='' >All</option>
				{deckSelectedFaction ?
					<>
						<option key={deckSelectedFaction}>{deckSelectedFaction}</option>
						<option key={'Neutral'}>Neutral</option>
					</>
					:
					faction.map(item => {
						return <option key={item}>{item}</option>
					})}
			</select>
			<select value={selectedRarity} name='rarity' onChange={({ target }) => onFilterSelect(target.value, target.name)} >
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
		selectedRarity: filters.selected.rarity,
	};
}

const mapDispatchToProps = {

	onSelect: selectFilter,
	onReset: resetFilters

};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
