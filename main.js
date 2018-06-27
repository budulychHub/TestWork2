function enable_false__editblock() {
            text_area__style.disabled = true;
            saveBtn.disabled = true;
            createTableBtn.disabled = true;
            createListBtn.disabled = true;
        }

        function enable_true__editblock() {
            text_area__style.disabled = false;
            saveBtn.disabled = false;
            createTableBtn.disabled = false;
            createListBtn.disabled = false;
        }

        var main__form = document.forms.form__name;
        var edit__form = document.forms.edit__form;

        var editBtn = main__form.editBtn;
        var bollBtn = main__form.bollBtn;
        var italicBtn = main__form.italicBtn;
        var decorationBtn = main__form.decorationBtn;
        var colorText_Block_Btn = main__form.colorText_Block_Btn;
        var colorBackground_Block_Btn = main__form.colorBackground_Block_Btn;
        var radioBtn = main__form.radioBtn;

        colorText_Block_Btn.setAttribute("id", "colorText_Block_Btn");

        var saveBtn = edit__form.saveBtn;
        var createTableBtn = edit__form.createTableBtn;
        var createListBtn = edit__form.createListBtn;


        editBtn.setAttribute("class", "btn__style");
        editBtn.style.fontWeight = "900";

        bollBtn.setAttribute("class", "btn__style");
        bollBtn.style.fontWeight = "900";

        italicBtn.setAttribute("class", "btn__style");
        italicBtn.style.fontStyle = "oblique";

        decorationBtn.setAttribute("class", "btn__style");
        decorationBtn.style.textDecoration = "underline";

        colorText_Block_Btn.setAttribute("class", "btn__style");
        colorText_Block_Btn.style.fontSize = "11px";

        colorBackground_Block_Btn.setAttribute("class", "btn__style");
        colorBackground_Block_Btn.style.fontSize = "11px";

        saveBtn.setAttribute("class", "btn__style");
        saveBtn.style.fontSize = "12px";
        saveBtn.style.width = "90px";

        createTableBtn.setAttribute("class", "btn__style");
        createTableBtn.style.fontSize = "12px";
        createTableBtn.style.width = "90px";

        createListBtn.setAttribute("class", "btn__style");
        createListBtn.style.fontSize = "12px";
        createListBtn.style.width = "90px";

        for (var i = 0; i < font__family__select.length; i++) {
            font__family__select.children[i].style.fontFamily = font__family__select.children[i].value;
        }

        for (var i = 0; i < font__size__select.length; i++) {
            font__size__select.children[i].style.fontSize = font__size__select.children[i].value;
        }

        font__size__select.setAttribute("class", "select__style");
        font__family__select.setAttribute("class", "select__style");

        var main_block = document.getElementsByClassName("main_block")[0];
        var edit_block = document.getElementsByClassName("edit_block")[0];
        var text_area__style = document.getElementsByClassName("text_area__style")[0];

        edit_block.style.display = "none";
        nav_second.style.display = "none";

        editBtn.onclick = function () {
            edit_block.style.display = "block";
            main_block.style.display = "none";
            nav_second.style.display = "block";
            nav_first.style.display = "none";
        }

        saveBtn.onclick = function () {
            edit_block.style.display = "none";
            main_block.style.display = "block";
            main_block.innerHTML = text_area__style.value;
            nav_second.style.display = "none";
            nav_first.style.display = "block";
        }

        for (var i = 0; i < 3; i++) {
            main_block.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
            text_area__style.textContent += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
        }

        bollBtn.onclick = function () {
            if (main_block.style.fontWeight == "normal") {
                main_block.style.fontWeight = "900";
            } else if (main_block.style.fontWeight == "900") {
                main_block.style.fontWeight = "normal";
            } else {
                main_block.style.fontWeight = "900";
            }
        }

        italicBtn.onclick = function () {
            if (main_block.style.fontStyle == "normal") {
                main_block.style.fontStyle = "oblique";
            } else if (main_block.style.fontStyle == "oblique") {
                main_block.style.fontStyle = "normal";
            } else {
                main_block.style.fontStyle = "oblique";
            }
        }

        decorationBtn.onclick = function () {
            if (main_block.style.textDecoration == "none") {
                main_block.style.textDecoration = "underline";
            } else if (main_block.style.textDecoration == "underline") {
                main_block.style.textDecoration = "none";
            } else {
                main_block.style.textDecoration = "underline";
            }
        }

        font__size__select.onchange = function () {
            for (var i = 0; i < font__size__select.length; i++) {
                if (font__size__select.options[i].selected) {
                    main_block.style.fontSize = this.value;
                }
            }
        }

        font__family__select.onchange = function () {
            for (var i = 0; i < font__family__select.length; i++) {
                if (font__family__select.options[i].selected) {
                    main_block.style.fontFamily = this.value;
                }
            }
        }

        main__form.onclick = function (x) {
            for (var i = 0; i < radioBtn.length; i++) {
                if (x.target.checked) {
                    main_block.style.textAlign = x.target.value;
                }
            }
        }

        var mainColorBlock = document.createElement("div");
        mainColorBlock.setAttribute("id", "mainColorBlock");
        mainColorBlock.className = "mainColorBlock";
        document.body.appendChild(mainColorBlock);

        mainColorBlock.style.display = "none";

        for (var i = 0; i < 9; i++) {
            document.getElementById("mainColorBlock").appendChild(document.createElement("div"));
            mainColorBlock.children[i].className = "color__child__blocks__style";
        }

        mainColorBlock.children[0].style.backgroundColor = "#ff1900";
        mainColorBlock.children[1].style.backgroundColor = "#000fff";
        mainColorBlock.children[2].style.backgroundColor = "#ae3727";
        mainColorBlock.children[3].style.backgroundColor = "#ffa500";
        mainColorBlock.children[4].style.backgroundColor = "#000002";
        mainColorBlock.children[5].style.backgroundColor = "#c1c1c1";
        mainColorBlock.children[6].style.backgroundColor = "#fff100";
        mainColorBlock.children[7].style.backgroundColor = "#ffffff";
        mainColorBlock.children[8].style.backgroundColor = "#006d00";

        colorText_Block_Btn.onclick = function () {
            if (mainColorBlock.style.display == "none") {
                mainColorBlock.style.display = "block";
                mainBackgroundColorBlock.style.display = "none";
            } else if (mainColorBlock.style.display == "block") {
                mainColorBlock.style.display = "none";
            }
        }

        mainColorBlock.onclick = function (x) {
            main_block.style.color = x.target.style.backgroundColor;
        }

        var mainBackgroundColorBlock = document.createElement("div");
        mainBackgroundColorBlock.setAttribute("id", "mainBackgroundColorBlock");
        mainBackgroundColorBlock.className = "mainBackgroundColorBlock";
        document.body.appendChild(mainBackgroundColorBlock);

        mainBackgroundColorBlock.style.display = "none";

        var imgBtn = document.createElement("input");
        document.getElementById("mainBackgroundColorBlock").appendChild(imgBtn);
        imgBtn.setAttribute("type", "button");
        imgBtn.setAttribute("value", "Background Image");
        imgBtn.className = "btn__style";
        imgBtn.style.marginBottom = "5px";
        imgBtn.style.width = "120px";

        var con = document.createElement("div");
        con.setAttribute("id", "con1");
        document.getElementById("mainBackgroundColorBlock").appendChild(con);

        for (var i = 0; i < 9; i++) {
            document.getElementById("con1").appendChild(document.createElement("div"));
            con.children[i].className = "colorBackground__child__blocks__style";
        }

        con.children[0].style.backgroundColor = "#ff1900";
        con.children[1].style.backgroundColor = "#000fff";
        con.children[2].style.backgroundColor = "#ae3727";
        con.children[3].style.backgroundColor = "#ffa500";
        con.children[4].style.backgroundColor = "#000002";
        con.children[5].style.backgroundColor = "#c1c1c1";
        con.children[6].style.backgroundColor = "#fff100";
        con.children[7].style.backgroundColor = "#ffffff";
        con.children[8].style.backgroundColor = "#006d00";

        colorBackground_Block_Btn.onclick = function () {
            if (mainBackgroundColorBlock.style.display == "none") {
                mainBackgroundColorBlock.style.display = "block";
                mainColorBlock.style.display = "none";
            } else if (mainBackgroundColorBlock.style.display == "block") {
                mainBackgroundColorBlock.style.display = "none";
            }
        }

        con.onclick = function (x) {
            main_block.style.backgroundColor = x.target.style.backgroundColor;
            main_block.style.backgroundImage = "none";
        }

        var mainImgBlock = document.createElement("mainImgBlock");
        document.getElementById("mainBackgroundColorBlock").appendChild(mainImgBlock);
        mainImgBlock.setAttribute("id", "mainImgBlock");

        mainImgBlock.style.display = "none";

        for (var i = 0; i < 9; i++) {
            document.getElementById("mainImgBlock").appendChild(document.createElement("div"));
            mainImgBlock.children[i].className = "colorBackground__child__blocks__style";
        }

        mainImgBlock.children[0].style.backgroundImage = "url(img/images1.jpg)";
        mainImgBlock.children[1].style.backgroundImage = "url(img/images2.jpg)";
        mainImgBlock.children[2].style.backgroundImage = "url(img/images3.jpg)";
        mainImgBlock.children[3].style.backgroundImage = "url(img/images4.jpg)";
        mainImgBlock.children[4].style.backgroundImage = "url(img/images5.jpg)";
        mainImgBlock.children[5].style.backgroundImage = "url(img/images6.jpg)";
        mainImgBlock.children[6].style.backgroundImage = "url(img/images7.jpg)";
        mainImgBlock.children[7].style.backgroundImage = "url(img/images8.jpg)";
        mainImgBlock.children[8].style.backgroundImage = "url(img/images9.jpg)";

        var inputForm = document.createElement("form");
        inputForm.setAttribute("enctype", "multipart/form-data");
        inputForm.setAttribute("method", "post");
        inputForm.setAttribute("id", "inputForm");
        inputForm.style.margin = "2% 0";
        document.getElementById("mainBackgroundColorBlock").appendChild(inputForm);

        var text = document.createElement("span");
        text.innerHTML = "Загрузити файл: ";
        document.getElementById("inputForm").appendChild(text);

        var input__file = document.createElement("input");
        input__file.setAttribute("type", "file");
        input__file.setAttribute("class", "file");
        input__file.setAttribute("name", "input__file_name");
        document.getElementById("inputForm").appendChild(input__file);

        inputForm.style.display = "none";

        imgBtn.onclick = function () {
            if (imgBtn.value == "Background Image") {
                con.style.display = "none";
                inputForm.style.display = "block";
                mainImgBlock.style.display = "block";
                mainBackgroundColorBlock.style.width = "400px";
                mainBackgroundColorBlock.style.height = "270px";
                imgBtn.value = "Background Color";
            } else if (imgBtn.value == "Background Color") {
                con.style.display = "block";
                inputForm.style.display = "none";
                mainImgBlock.style.display = "none";
                mainBackgroundColorBlock.style.width = "200px";
                mainBackgroundColorBlock.style.height = "240px";
                imgBtn.value = "Background Image";
            }
        }

        mainImgBlock.onclick = function (x) {
            main_block.style.background = "none";
            main_block.style.backgroundImage = x.target.style.backgroundImage;
            main_block.style.backgroundSize = "100% 100%";
        }

        tableConstructorBlock.setAttribute("class", "box__style");
        tableConstructorBlock.style.padding = "20px";

        tableConstructorBlock.style.display = "none";

        createTableBtn.onclick = function () {
            tableConstructorBlock.style.display = "block";
            enable_false__editblock();
        }

        create__Table__Btn.onclick = function () {
            text_area__style.value += "\n<table width=" + valueWidth__Border.value + " height=" + valueHeight__Border.value + " cellspacing=" + cellspacing.value + " border=" + sizeOfBorder.value + " borderColor=" + borderColor.value + ">";
            for (var i = 1; i <= number_of__rows.value; i++) {
                text_area__style.value += "\n\t<tr>";
                for (var j = 1; j <= number_of__column.value; j++) {
                    text_area__style.value += "\n\t\t<td>" + j + "</td>";
                }
                text_area__style.value += "\n\t</tr>";
            }
            text_area__style.value += "\n</table>";

            tableConstructorBlock.style.display = "none";
            enable_true__editblock();
        }

        cast__Back__Btn.onclick = function () {
            tableConstructorBlock.style.display = "none";
            enable_true__editblock();
        }

        listConstructorBlock.style.display = "none";
        ol__item__list.style.display = "none";
        ul__item__list.style.display = "none";

        listConstructorBlock.setAttribute("class", "box__style");
        listConstructorBlock.style.padding = "20px";

        createListBtn.onclick = function () {
            listConstructorBlock.style.display = "block";
            enable_false__editblock();
        }

        listConstructorBlock.onclick = function (x) {
            if (x.target.id == "ul_list") {
                list___type = x.target.value;
                ol__item__list.style.display = "none";
                ul__item__list.style.display = "block";
            } else if (x.target.id == "ol_list") {
                list___type = x.target.value;
                ol__item__list.style.display = "block";
                ul__item__list.style.display = "none";
            }
        }

        create__list__Btn.onclick = function () {
            var sle;
            if (list___type == "ol") {
                for (var i = 0; i < ol__item__list.length; i++) {
                    if (ol__item__list.options[i].selected) {
                        sle = ol__item__list.options[i].value;
                    }
                }
            } else if (list___type == "ul") {
                for (var i = 0; i < ul__item__list.length; i++) {
                    if (ul__item__list.options[i].selected) {
                        sle = ul__item__list.options[i].value;
                    }
                }
            }

            text_area__style.value += "\n<" + list___type + " type=" + sle + ">";
            for (var i = 0; i < numberOfItems.value; i++) {
                text_area__style.value += "\n\t<li>text</li>";
            }
            text_area__style.value += "\n</" + list___type + ">";

            listConstructorBlock.style.display = "none";
            enable_true__editblock();
        }

        list__cast__Back__Btn.onclick = function () {
            listConstructorBlock.style.display = "none";
            enable_true__editblock();
        }

        editBtn.setAttribute("id", "edit___Btn");
        document.body.onclick = function (x) {
            if (x.target.tagName == "BODY" || x.target.tagName == "NAV" || x.target.tagName == "P" || x.target.tagName == "MAIN" || x.target.tagName == "FORM" || x.target.id == edit___Btn.id) {
                mainColorBlock.style.display = 'none';
                mainBackgroundColorBlock.style.display = 'none';
            } 
        }
        
        $('.file').change(function() {
            var reader = new FileReader(),
                file = this.files[0],
                div = $('.main_block');

            reader.onloadend = function() {
                div.css('background', 'url(' + this.result + ')');
                div.css('backgroundSize', '100% 100%');
            }

            file ? reader.readAsDataURL(file) : div.css('background', 'none');
        });