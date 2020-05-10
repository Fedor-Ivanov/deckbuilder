import React from 'react'
import './filters.css'
import { connect } from 'react-redux';


function Filters({ type, provision, faction, rarity }) {

	return (
		<div className='filters'>

			<select>
				<option value='' >All</option>
				{type.map(item => {
					return <option >{item}</option>
				})}
			</select>
			<select>
				<option value='' >All</option>
				{provision.map(item => {
					return <option >{item}</option>
				})}
			</select>
			<select>
				<option value='' >All</option>
				{faction.map(item => {
					return <option >{item}</option>
				})}
			</select>
			<select>
				<option value='' >All</option>
				{rarity.map(item => {
					return <option >{item}</option>
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
		rarity: filters.rarity


	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
