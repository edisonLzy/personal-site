export default {
	set(k: string, v: any) {
		localStorage.setItem(k, v);
	},
	get(k: string) {
		return localStorage.getItem(k);
	},
	delete(k:string){
		return localStorage.removeItem(k);
	},
	has(k:string){
		return !!this.get(k);
	}
};