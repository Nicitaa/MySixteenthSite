import './modalMenu.css'

import fullMenu from '../../../../constant/fullMenu.json'

import { ModalContainer } from '../Container/ModalContainer'
import { Category } from './Category'
import { useSlider } from '../../../../hooks/useSlider'

interface ModalMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalMenu({isOpen,onClose}:ModalMenuProps) {

  const { handleMouseMove, handleTouchMove, handleMouseDown, handleTouchDown } = useSlider()

  /* logic for deleting/!deleting ingridients (without 2nd modal) - start */







  /* adding smth in a cart and showing 2nd modal for configuring - start*/








  /* for changing active class in modal-footer by scrolling menu - start */














  /* MODAL HEADER */

  const header = (
    <div className="flex flex-row items-center">
      <h1 className={`modal-title`}>Menu</h1>
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <ul className='modal-categories-container'>
          {fullMenu.map((category) => (
            <a href={`#${category.title}`} key={category.id}>
              <li className={`nav-item-${category.id} modal-category`}>
                {category.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )




  /* MODAL BODY */
  const body = (
    <>
      {/* Menu food-category container */}
      <ul className='modal-category-list '>
        {fullMenu.map(category => (
          <li key={category.id}><Category {...category} /></li>
        ))}
      </ul>
    </>
  )



  return (

    <ModalContainer className='modal-menu'
      header={header} headerClassName='modal-menu-header'
      body={body} bodyClassName='modal-menu-body'
      isOpen={isOpen} onClose={onClose}
      imgSrc='/pages/bg-secondary-reverse.avif' />
  )
}