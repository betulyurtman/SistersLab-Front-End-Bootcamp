import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Button, Skeleton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CharacterCard = ({ 
    character, 
    handleClick, 
    loading,
    }) => {
    return (
        <Card key={character.id} sx={{width: '150px'}}>
            {loading ?
                <Skeleton variant='rectangular' width={300} height={150} />
                : <CardMedia component="img" alt="character" height="140" animation="pulse"
                image={character.image}/>
            }
            <CardContent>
                {loading ? 
                <Skeleton width={80} />
                : <Typography variant='h5' component="div">
                    {character.name}
                </Typography>
                }
                {loading ?
                <Skeleton width={60} />
                : <Typography variant='body2' component="text.secondary">
                    {character.gender} {character.status}
                </Typography>
                }
            </CardContent> 
            <CardActions>
                {loading ? 
                <Skeleton variant="circular" width={25} height={25}/>
                : <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="error"/>
                </IconButton>
                }
                <Button size="small" variant="text" onClick={() => handleClick(character.id)}>{loading ? <Skeleton width={100} /> : 'Details'}
                </Button>
            </CardActions>
        </Card>
    );
};

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};

CharacterCard.defaultProps = {
    character: {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
  };
  

export default CharacterCard;