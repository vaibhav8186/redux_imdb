import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actorAction } from '../../actions/actorAction'
import Spinner from '../../common/spinner'

class ActorList extends Component{
	componentDidMount(){
		this.props.actorAction()
	}
	getName(){
		if(this.props.actors.length){
			return this.props.actors.map((actor) =>{
				return(
					<li>{actor.actorname}</li>
					)	
			})
		}else{
			return null;
		}
	}
	render(){
		let action;
		if(this.props.actors.isFetching == true){
			action = <Spinner />
		}else{
       
		}
		return(
					<div>
         <h1>This is actor list</h1>
         {action}
         {this.getName()}
         </div>
			)
	}
}
function mapStateToProps(state){
	return{
		actors: state.actors
	}
}

function mapDispatchToProps(dispatch){
	return{
		actorAction: bindActionCreators(actorAction,dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps) (ActorList)