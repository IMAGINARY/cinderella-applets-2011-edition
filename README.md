cinderella-applets-2011-edition
===============================

The 2011 edition of Cinderella applets originally written by Jürgen Richter-Gebert with Cinderella, a program by Jürgen Richter-Gebert and Ulrich Kortenkamp (http://www.cinderella.de), for the IMAGINARY installation at the Deutsches Museum Munich and consequently also shown in other exhibitions (http://www.imaginary.org).

Test it using http://rawgithub.com/IMAGINARY/cinderella-applets-2011-edition/master/index_en.html

Important notice: unfortunately the Cinderella applets do not work anymore "out of the box" since they are implemented in Java for the web (and this makes problems due to Javas latest security updates). There are two alternative ways, though:

1) Just install Cinderella - the main dynamic geometry software  (it is free, see cinderella.de) and open the .cdy source files (so you can play with the games inside Cinderella). You find all Cinderella applet (cdy files) in the /en directory of the github repository.

2) Use our ready-made "discovery box", which is a ISO image that comes along with Ubuntu operating system and the browser/Java ready for Cinderella.
You can find it at: https://www.dropbox.com/s/rkdne93k9l473t1/Entdeckerbox-2013.iso?dl=0 (1.1 GB). You can then either burn it on DVD and boot from it, or use a Virtual Machine to boot from it (such as Virtual Box).

Contributions
-------------

We encourage you to add translations for new languages and to improve existing ones. Note that by sending us your contributions you agree that they will be published under the license stated at the end of this file. 

Please read the entire guide before starting any action.

### Adding a new translation

First, look up your two-letter IETF BCP 47 language tag using [this search engine](http://rishida.net/utils/subtags/). 

Assume you want to translate from English (`en`) to Turkish (`tr`). (Replace `en` and `tr` with the tags that fit your needs). Make a copy of the `en` folder and rename it to `tr`. Make also a copy of the files `index_en.html`, `info_en.html` and `c_info_en.html`, and rename them as `index_tr.html`, `info_tr.html` and `c_info_tr.html`, respectively.

You need to translate the main menu page, the credits pages, and the texts accompanying applets.

To translate the main menu, open the `index_tr.html` and replace all text strings from English to your Turkish (e.g. `reflections` and so on). Do the same with `info_tr.html` and `c_info_tr.html` for the credits pages.

For the applets, enter into the `tr` folder. Each page has a letter-number code (from A1 to H4) and two files (applet and text). For instance, the first applet page (called Reflection of reflections) consist on the files `A1_applet.html` and `A1_text.html`. You will have to translate the text of the files ending in `text.html`, that is, from `A1_text.html` to `H4_text.html`.

Finally, some applets have text inside the program code that can be translated. For this you will need to open the `.cdy` files with the [Cinderella program](http://cinderella.de) and modify the text from there. Ask for support if you are not familiar with the Cinderella program.

Please keep your document structure as close as possible to the original translation. We usually use a visual diff and merge tool to have the original and the new translation side by side. Using the side-by-side editing also avoids many common erros, e.g. you will notice html commands you messed up by accident due to the highlighted changes.

During the translation of the text from one language to another you should also consider to review a third translation as well since translations are usually not literal. Try to stay close to the German and English version although this may not always be possible.

Please also add your name(s) at the end of the `AUTHORS` file. 

#### Adding new translations via GitHub

This is the recommended way of contributing in general. Sending endless emails is error prone and time consuming, but still possible. If you want to contribute via GitHub, here are some general rules:

1. Fork the project to your account
2. Create a new branch called `xxxxx-translation` where `xxxxx` is the human readable name of your language (e.g. `english` or `turkish`). 
3. Apply changes *only* to this branch. Changes to others brachnes *will not be merged* with the `master` branch.
4. Once you have something ready to show, make a pull request for your branch and wait for our reply. 

This is not the place to give an introduction to git, GitHub and its workflow. There are many tutorials in the web, but feel free to ask specific questions using our [issue tracker](https://github.com/IMAGINARY/cinderella-applets-2011-edition/issues).

### Improving existing translations

You found a typo? You think, a certain translation is wrong or ambigious? [Report the issue on GitHub](https://github.com/IMAGINARY/cinderella-applets-2011-edition/issues/new) or [contact us directly](http://http//www.imaginary.org/contact).

License
-------

The gallery files and its sources are released under the `TODO` license. For details see the `LICENSE` file. By contributing to this project you automatically accepts that your contributions will be released under the same license terms.

Authors
-------

See the `AUTHORS` file.
