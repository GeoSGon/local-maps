import {
    Container,
    Form,
    FormTitle,
    MapContainerStyled,
    Section,
    CategoryContainer,
    CategoryBox,
    CategoryImage,
    ButtonContainer,
    Button
    } from './styles';
  import Input from '../../components/Input';
  import Header from '../../components/Header';
  import { useState } from 'react';
  import { 
    TileLayer, 
    Marker, 
    useMapEvents,
    Popup
    } from 'react-leaflet';
  import { categories } from './categories';
  import useGetLocation from '../../hooks/useGetLocation';
  import { toast } from 'react-toastify';
  import { useNavigate } from 'react-router-dom';
    
  export default function New() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
      name: '',
      description: '',
      contact: '',
      category: '',
      coords: [0, 0]
    });
    const { coords } = useGetLocation();
  
    async function onSubmit() {
      const request = await fetch("http://localhost:3333/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          latitude: formValues.coords[0],
          longitude: formValues.coords[1],
        }),
      });
  
      if (request.ok) {
        toast("Estabelecimento salvo com sucesso!", {
          type: "success",
          autoClose: 2000,
          onClose: () => navigate('/'),
        });
      }
    }
  
    if (!coords) {
      return <h1>Obtendo localização...</h1>;
    }
    
    function LocationMarker() {
      const [position, setPosition] = useState(formValues.coords)
      const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
        },
      })
    
      return position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )
    }
  
    return (
      <Container>
        <Header />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
  
        <FormTitle>Cadastro do comércio local</FormTitle>
  
        <Section>Dados</Section>
  
        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />
  
        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />
  
        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />
  
        <Section>Endereço</Section>
  
        <MapContainerStyled 
          center={
            {
              lat: coords[0],
              lng: coords[1]
            }
          }
          zoom={13} 
          scrollWheelZoom={false}
          
          >
  
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
          <LocationMarker />
        </MapContainerStyled>
  
          <Section>Categoria</Section>
  
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryBox
                key={category.key}
                onClick={() => {
                  setFormValues((prev) => ({ ...prev, category: category.key }));
                }}
                isActive={formValues.category === category.key}
              >
                <CategoryImage src={category.url} />
                {category.label}
              </CategoryBox>
            ))}
          </CategoryContainer>
  
          <ButtonContainer>
            <Button type="submit">Cadastrar comércio local</Button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }