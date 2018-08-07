import React from 'react'
import renderer from 'react-test-renderer'
import Search, {UnWrapped as UnwrappedSearch} from '../Search'
import {shallow,render} from 'enzyme'
import ShowCard from '../ShowCard'
import preload from '../../data.json'
import {Provider} from 'react-redux'
import {setSearchTerm} from '../actions'
import {MemoryRouter} from 'react-router-dom'
import store from '../store'


// // test suite
// describe('Search',()=>{

//     it("should render correct amount of shows",()=>{
//         const component =shallow(<Search/>);
//         expect(component.shows.length).toEqual(component.find(ShowCard).length);
//     });
// })

test('Search renders correctly',() =>{
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
    //const tree = component.toJSON();
    expect(component).toMatchSnapshot();
})


test("Search should render correct amount of shows",()=>{
    const component =shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>);
    expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test("Search should render correct amount of shows based on search terms",()=>{

    const searchWord ='black';
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord}/>);

    //component.find('input').simulate('change',{target:{value:searchWord}});

    const showCount = preload.shows.filter(show=>(`${show.title}${show.discription}`.toUpperCase().indexOf(searchWord.toUpperCase())>=0)).length;

    expect(component.find(ShowCard).length).toEqual(showCount);

});

test("Search should render correct amount of shows based on search terms with redux", () => {
    const searchWord = "black";
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>
    );
  
  
    const showCount = preload.shows.filter(
      show =>
        `${show.title}${show.discription}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) >= 0
    ).length;
  
    expect(component.find('.show-card').length).toEqual(showCount);

  });
