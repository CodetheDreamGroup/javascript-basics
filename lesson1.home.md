# Command Line Project

[Lecture Video](https://youtu.be/0KQZ6N1UEeg)

## 1. Creating Files

In the command line create 3 files books.txt, foods.txt and songs.txt. Then open them using the file navigator and add type your 3 favorite books in books.txt, your 3 favorite foods in foods.txt and your favorite songs in songs.txt. Remember to save your files after you modify each file.

Using the cat command display the contents of each of the files in the terminal.

Use google if you don't remember how the commands work. I suggest googling for "touch command" and "cat command".


## 2. Download files

The website [http://www.textfiles.com/etext/FICTION/](http://www.textfiles.com/etext/FICTION/) has several free books. Remember the curl command that we used to download a file from the internet.

```bash
ctdinstructor:~/workspace $ curl www.textfiles.com/etext/FICTION/mobydick -o mobydick.txt
```

The first parameter *www.textfiles.com/etext/FICTION/mobydick* is the url of the file you wish to download. After that there is the output flag *-o* followed by the filename to save the file as.

Download a different book by replacing the url and the filename in the example.

## 3. Verify download
After you run your command, verify that the file was downloaded by listing the contents of the current directory. Do you remember which command to use?

## 4. Read contents
Now that you know the file is there open the file in the command line with the `less` command. For example to open up the mobydick.txt file I used.

```bash
ctdinstructor:~/workspace $ less mobydick.txt
```

Remember that when we run the `less` command doesn't behave like the other commands. The other commands display the command output and then exit. The `less` command stays open until you tell it to quit. While it is open you can interact with it by pressing the space bar to go to the next page or pressing the _q_ key to quit.


## 5. Create directories
Remember that to organize things a little better we can use directories.

Create a directory named _favorites_. If you don't remember the command, a useful way to figure it out is by googling "create directory linux".

To verify that you created your directory successfully you can use the `ls` command or use the file navigation on the left hand side.

## 6. Moving files
The `mv` command is used to move files. For example to move the books.txt file into the favorites directory you would run the following command:

```bash
ctdinstructor:~/workspace $ mv books.txt favorites
```

Move the other two files (foods.txt and songs.txt) into the favorites directory.

To verify that the files are there you can use the file navigator on the left side or the `ls` command.

By default the `ls` command lists the contents of the current directory, but you can pass an argument, the name of directory to list the contents of that directory.

## 7. Change directories

Use the `cd` command to change the current directory to the favorites directory and then list the contents of the folder. This means that simply typing `ls` should list books.txt, songs.txt and foods.txt

## 8. Remove files

While you are still in the favorites directory remove the file books.txt using the rm command.

```bash
ctdinstructor:~/workspace/favorites $ rm books.txt
```
List the contents of the current directory.

Remove the other two files.


## Resources

- [Mac/Unix/Linux Cheat Sheet on Command Line](http://learntocodewith.me/command-line/unix-command-cheat-sheet/)
- [Another Mac/Unix/Linux Cheat Sheet on the Command Line] (https://www.git-tower.com/blog/command-line-cheat-sheet/)
- [Windows Cheat Sheet on Command Prompt](http://www.cs.columbia.edu/~sedwards/classes/2017/1102-spring/Command%20Prompt%20Cheatsheet.pdf)

A more extensive reference that will make you a command line master, but contains much more than required for this course.
- [Learn Enough to be Dangerous CLI](https://www.learnenough.com/command-line-tutorial)