export type BoxData = {
  map: any,
  imageUrl: string,
  title: string,
  text: string,
  id: string
};
//export type LocalBoxes = BoxData[]; NEVEIKIA


export type User = {
  email: string,
  first_name: string,
  gender: string,
  id: string,
  last_name: string,
  filter: any,
}
//export type LocalUsers = User[];  NEVEIKIA


export type Target = {
  target: HTMLInputElement
};