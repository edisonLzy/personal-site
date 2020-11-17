export default {
	set(k: string, v: string):void {
		localStorage.setItem(k, v);
	},
	get(k: string):string|null {
		return localStorage.getItem(k);
	},
	delete(k:string):void{
		return localStorage.removeItem(k);
	},
	has(k:string):boolean {
		return !!this.get(k);
	}
};