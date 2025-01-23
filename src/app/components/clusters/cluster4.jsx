import React from 'react';
import { Card, CardContent, Typography, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { CheckCircle, School, Code, Book } from '@mui/icons-material';

const courses = [
  {
    title: "Html & Css",
    tasks: [
      { text: "Mas3y > 0", icon: <CheckCircle /> },
      { text: "Дарс 47", icon: <School /> },
    ],
    certificate: false,
  },
  {
    title: "Js",
    subtitle: "Захвастірі",
    tasks: [
      { text: "Mas3y > 0", icon: <CheckCircle /> },
      { text: "Дарс 64", icon: <Code /> },
    ],
    certificate: true,
  },
  {
    title: "C++ барри навомірязи",
    tasks: [
      { text: "Mas3y > 0", icon: <CheckCircle /> },
      { text: "Дарс 84", icon: <Book /> },
    ],
    certificate: true,
  },
];

const CourseProgressCard = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        {courses.map((course, index) => (
          <React.Fragment key={index}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
              {course.title}
            </Typography>
            {course.subtitle && (
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#555' }}>
                {course.subtitle}
              </Typography>
            )}
            <List>
              {course.tasks.map((task, taskIndex) => (
                <ListItem key={taskIndex} sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <Checkbox edge="start" checked={false} sx={{ color: '#1976d2' }} />
                  </ListItemIcon>
                  <ListItemText primary={task.text} sx={{ color: '#333' }} />
                </ListItem>
              ))}
            </List>
            {course.certificate && (
              <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1, color: '#777' }}>
                [Сертификат]
              </Typography>
            )}
            {index < courses.length - 1 && <Divider sx={{ my: 2 }} />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseProgressCard;