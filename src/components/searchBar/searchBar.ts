import { defineComponent, ref, computed } from 'vue';
import searchResults from '@/components/searchResults/searchResults.vue';


export default defineComponent({
    name: 'searchBar',
    components:{searchResults},
    setup(){

        const debounceTimeOut = ref();
        const debouncedValue = ref('')
        return{
            debouncedValue,

            searchTerm: computed({
                get(){
                    return debouncedValue.value;
                },
                set(val: string){
                if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value);
                    debounceTimeOut.value = setTimeout(()=>{
                        debouncedValue.value = val;
                    },2000);
                }
            })
        }
    }

})