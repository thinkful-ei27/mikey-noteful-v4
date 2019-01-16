'use strict';

const notes = [
  {
    '_id': '111111111111111111111101',
    'title': 'Hit the slopes with nopes',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'folderId' : '111111111111111111111103',
    'tags': ['222222222222222222222201', '222222222222222222222203'],
    'UserId' : '333333333333333333333301',
  },
  {
    '_id': '111111111111111111111107',
    'title': 'Cats hate a hot economy',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'folderId' : '111111111111111111111101',
    'UserId' : '333333333333333333333301'
  },
  
  {
    '_id': '111111111111111111111103',
    'title': 'Dumb articles',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'folderId' : '111111111111111111111103',
    'tags': ['222222222222222222222201', '222222222222222222222203'],
    'UserId' : '333333333333333333333301',
  },
  {
    '_id': '111111111111111111111105',
    'title': '7 things Lady Gaga has in common with cats',
    'content': 'Lorem ipsum dolor sit amet, boring consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'folderId' : '111111111111111111111101',
    'tags': ['222222222222222222222201', '222222222222222222222203'],
    'UserId' : '333333333333333333333301',
  },
  {
    '_id': '111111111111111111111104',
    'title': 'Best Tree  article you\'ll ever read',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'folderId' : '111111111111111111111102',
    'tags': ['222222222222222222222200', '222222222222222222222202'],
    'UserId' : '333333333333333333333300',

  },
  {
    '_id': '111111111111111111111106',
    'title': '100 years, 1 parrot',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'folderId' : '111111111111111111111102',
    'tags': ['222222222222222222222202'],
    'UserId' : '333333333333333333333300',

  },
  {
    '_id': '111111111111111111111102',
    'title': 'Gooberment secrets',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'folderId' : '111111111111111111111102',
    'tags': ['222222222222222222222200', '222222222222222222222202'],
    'UserId' : '333333333333333333333300',

  },
 
  {
    '_id': '111111111111111111111108',
    'title': 'Juggling in space!',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'folderId' : '111111111111111111111100',
    'UserId' : '333333333333333333333300',
  }
];

const folders = [
  {
    '_id': '111111111111111111111100',
    'name': 'Pets'
  },
  {
    '_id': '111111111111111111111101',
    'name': 'Jokes'
  },
  {
    '_id': '111111111111111111111102',
    'name': 'Nature'
  },
  {
    '_id': '111111111111111111111103',
    'name': 'Juggling'
  }
];

const tags = [
  {
    '_id': '222222222222222222222200',
    'name': 'tricks'
  },
  {
    '_id': '222222222222222222222201',
    'name': 'stunts'
  },
  {
    '_id': '222222222222222222222202',
    'name': 'hardwork'
  },
  {
    '_id': '222222222222222222222203',
    'name': 'outside'
  }
];


const users = [
  {
    '_id' : '333333333333333333333300',
    'fullname' : 'don quixote de la mancha',
    'username' : 'donquixote',
    'password' : '$2a$10$HKXqJKAMGPYPZvPmMvH1felUmpru3ICEE3OIDwMBc6oUUFkZztLwq'
  },
  {
    '_id' : '333333333333333333333301',
    'fullname' : 'tiny computer',
    'username' : 'sponge',
    'password' : '$2a$10$HKXqJKAMGPYPZvPmMvH1felUmpru3ICEE3OIDwMBc6oUUFkZztLwq' //'jugglingclub'
  }
];

module.exports = { notes, folders, tags, users };