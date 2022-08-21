import styled from "styled-components";

export const Heading1 = styled.p`
  font-size: 23px;

`
export const Text = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 10px;

`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

export const AddButton = styled.button`
  margin-left: 10px;
  height: 32px;
  width: 70px;
`
export const PersonPhone = styled.li`
  font-size: 15px;
  display: grid;
  grid-template-columns: 100px 100px;
  row-gap: 20px;
`

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`

export const ImageGalleryContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const ImageGalleryItemContainer = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const ImageGalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
    transform: scale(1.03);
    cursor: zoom-in;
  }
`

export const LoaderContainer = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

export const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`

export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`

export const TextCenterContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

