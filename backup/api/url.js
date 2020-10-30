
import _ from 'lodash'

export const baseUrl='http://localhost:8000'

/*
GST
http://localhost:8000/gstcode/?id__iexact=1&code__icontains=&description__icontains=&remarks__icontains=
Search Strings:
1) id__iexact 2) code__icontains 3)description__icontains 4) remarks__icontains
*/
// export const gstcodeUrlParams={
//     url:'gstcode',
//     searchParam:[
//         {id__iexact:''},
//         {code__icontains:''},
//         {description__icontains:''},
//         { remarks__icontains:''}
//     ]
// }
export const gstcodeUrlParams={
    url:'gstcode',
    searchParam:[
        {
            key: 'id__iexact',
            value:''
        },
        {
            key:'code__icontains',
            value:''
        },
        {
            key:'description__icontains',
            value:''
        },
        {
            key:'remarks__icontains',
            value:''
        }
    ]
}

export const setParams=(params)=>{
    params.url+='/'
    console.log(params)
    const __url=new URL(params.url,baseUrl)
    // loop through params and appen to searchparams
    params.searchParam.map(p1=>{
        console.log(p1)
        __url.searchParams.append(p1.key,p1.value)
        console.log(__url)
    })
    console.log(__url)
}
