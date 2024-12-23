import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from '@mui/material';

// Style for the table container
const tableContainerStyle = {
  marginTop: '20px',
  marginBottom: '20px',
  boxShadow: 'none',
  border: '1px solid #ddd',
};

// Component for a single row containing the audio samples for an attention mechanism
const AttentionMechanismRow = ({ mechanism, audioFiles }) => (
  <TableRow>
    <TableCell>
      <Typography variant="body1" fontWeight="bold">
        {mechanism}
      </Typography>
    </TableCell>
    {audioFiles.map((audioFile, index) => (
      <TableCell key={index}>
        <audio controls>
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </TableCell>
    ))}
  </TableRow>
);

// Component for a parameter size section
const ParamSizeSection = ({ paramSize, data }) => (
  <Box>
    <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
      Parameter Size: {paramSize}
    </Typography>
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attention Mechanism</TableCell>
            <TableCell>Sample 1</TableCell>
            <TableCell>Sample 2</TableCell>
            <TableCell>Sample 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((mechanismData, index) => (
            <AttentionMechanismRow
              key={index}
              mechanism={mechanismData.mechanism}
              audioFiles={mechanismData.audioFiles}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ParamSizeSection;
