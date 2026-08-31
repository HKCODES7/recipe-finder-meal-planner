import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
@Component({tag:'recipe-search',styleUrl:'recipe-search.css',shadow:true})
export class RecipeSearch { @Prop() initialQuery=''; @Prop() categories:string[]=[]; @State() query=''; @State() category=''; @Event() searchSubmitted!:EventEmitter<{query:string;category:string}>;
 componentWillLoad(){this.query=this.initialQuery}
 submit(e:Event){e.preventDefault();this.searchSubmitted.emit({query:this.query.trim(),category:this.category})}
 render(){return <form onSubmit={e=>this.submit(e)}><label>Search recipes<input value={this.query} onInput={(e:any)=>this.query=e.target.value} placeholder="e.g. chicken"/></label><label>Category<select onInput={(e:any)=>this.category=e.target.value}><option value="">All categories</option>{this.categories.map(c=><option value={c}>{c}</option>)}</select></label><button type="submit">Search</button></form>}
}
