"use strict";

jQuery.ajax({
    type: "GET",
    dataType: "json",
    url: "http://duckyduck.gnugen.ch/webui/json?metric=PSNR&git_url[]=https%3A%2F%2Fchromium.googlesource.com%2Fwebm%2Flibvpx&git_url[]=git%3A%2F%2Fgit.videolan.org%2Fx264.git",
    success: function (data, textStatus, jqXHR) {
        // La reponse du serveur est contenu dans data
        // On peut faire ce qu'on veut avec ici
        generateSplitView(data); //< --- a placer dans la success function
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(['API error json', jqXHR, textStatus, errorThrown]);
        var data = [{"git_url":"https:\/\/github.com\/videolan\/x265","source":"bus_cif.webm","filename":"cronjob_1400356637.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/095b8df9-f339-4c5e-95b5-3b289a943962","date":1400356666,"metric":"psnr","value":"7.81451","bitrate":"595","git_commit":"d2051f9544434612a105d2f5267db23018cb3454"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400454049_libvpx-vp8_git.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/2b1602b6-93ec-45cd-a944-88177acbac2b","date":1400454187,"metric":"psnr","value":"45.9059","bitrate":"1010","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400455709_libvpx-vp8_git.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/89bb8a29-ba77-4677-81c8-f4c5d022fcd1","date":1400455784,"metric":"psnr","value":"45.9059","bitrate":"1010","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458353_x264_git_3200.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/e1d342dc-37eb-49f9-bc39-ecf1986daacf","date":1400458417,"metric":"psnr","value":"48.2201","bitrate":"3120","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400458632_libvpx-vp8_git_100.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/8f736172-9dff-4599-ae86-0c030bf7d56d","date":1400458690,"metric":"psnr","value":"28.8986","bitrate":"127","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400458632_libvpx-vp8_git_1600.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/e168b1dd-e45b-42fe-a9e9-c13108584b92","date":1400458939,"metric":"psnr","value":"47.844","bitrate":"1546","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400458632_libvpx-vp8_git_200.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/6dd02db6-228b-4103-bef1-e7b36dfab72d","date":1400458750,"metric":"psnr","value":"32.0524","bitrate":"212","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400458632_libvpx-vp8_git_400.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/6ba616e7-a7c9-4ee1-84e7-0390d5f3d993","date":1400458810,"metric":"psnr","value":"41.3232","bitrate":"406","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400458632_libvpx-vp8_git_800.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/b19753d3-fc08-42e8-af34-79a36bca8fd4","date":1400458873,"metric":"psnr","value":"44.9296","bitrate":"806","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458633_x264_git_100.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/72fba871-78ba-40e0-8cc2-b1f6ac0cff6b","date":1400459002,"metric":"psnr","value":"27.3234","bitrate":"98","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458633_x264_git_1600.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/085c574f-3f0f-459b-82db-08d825d53ae0","date":1400459253,"metric":"psnr","value":"44.15","bitrate":"1576","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458633_x264_git_200.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/91854901-673f-4608-afdf-e0b03cdfbb98","date":1400459064,"metric":"psnr","value":"31.2222","bitrate":"195","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458633_x264_git_400.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/93774531-c4b7-46a0-9b4f-daad7f76b5d0","date":1400459127,"metric":"psnr","value":"35.577","bitrate":"399","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400458633_x264_git_800.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/ff4ff7ee-27cd-4cd9-8e86-2371ffe4fa9d","date":1400459190,"metric":"psnr","value":"39.948","bitrate":"800","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400505935_libvpx-vp8_git_100.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/4f349a4c-e49f-4366-a29b-f6d802ee4652","date":1400505994,"metric":"psnr","value":"28.8986","bitrate":"127","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"sintel_480p.mp4","filename":"cronjob_1400505935_libvpx-vp8_git_100.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/48ead672-101f-4383-bc87-95401278bd1a","date":1400506259,"metric":"psnr","value":"38.1794","bitrate":"124","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400505935_libvpx-vp8_git_1600.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/902b4b2a-95f0-403b-84de-43ed2b138900","date":1400507373,"metric":"psnr","value":"47.844","bitrate":"1546","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"sintel_480p.mp4","filename":"cronjob_1400505935_libvpx-vp8_git_1600.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/ba128eed-ab76-411d-8d2d-9ecec11c97ae","date":1400507689,"metric":"psnr","value":"49.8572","bitrate":"1298","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400505935_libvpx-vp8_git_200.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/7101b4e8-6356-459c-be9b-0b3815f7a5e0","date":1400506318,"metric":"psnr","value":"32.0524","bitrate":"212","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"sintel_480p.mp4","filename":"cronjob_1400505935_libvpx-vp8_git_200.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/a3ec3738-6e0c-493d-a96f-85317c7c58ec","date":1400506590,"metric":"psnr","value":"40.5578","bitrate":"202","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400505935_libvpx-vp8_git_400.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/3cbe954e-1ae6-4595-b637-71b2ff32df78","date":1400506652,"metric":"psnr","value":"41.3232","bitrate":"406","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"sintel_480p.mp4","filename":"cronjob_1400505935_libvpx-vp8_git_400.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/d86dd96d-cf5e-44e0-afba-67f54232e8a4","date":1400506941,"metric":"psnr","value":"43.3563","bitrate":"362","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"bus_cif.webm","filename":"cronjob_1400505935_libvpx-vp8_git_800.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/8af3e827-5664-403d-8a98-c0b3d1ed4b53","date":1400507005,"metric":"psnr","value":"44.9296","bitrate":"806","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"https:\/\/chromium.googlesource.com\/webm\/libvpx","source":"sintel_480p.mp4","filename":"cronjob_1400505935_libvpx-vp8_git_800.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/7b6f35e3-8dfb-4b55-aa4d-e34a55b94c84","date":1400507309,"metric":"psnr","value":"46.3717","bitrate":"674","git_commit":"b043c3e0813827f164c899fcd0b7f222f3018144"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400505937_x264_git_100.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/e38ce0c6-7b56-4bdd-9a6e-0ed3da39eb4c","date":1400507752,"metric":"psnr","value":"27.3234","bitrate":"98","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"sintel_480p.mp4","filename":"cronjob_1400505937_x264_git_100.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/0bb850df-9eb4-4043-b355-5fca50548ab9","date":1400507969,"metric":"psnr","value":"35.8218","bitrate":"96","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400505937_x264_git_1600.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/bb3f885b-4a9c-404a-b508-fe6667fb1f6f","date":1400508899,"metric":"psnr","value":"44.15","bitrate":"1576","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"sintel_480p.mp4","filename":"cronjob_1400505937_x264_git_1600.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/dbd40b3b-7c12-4301-9632-df5d8e9869aa","date":1400509136,"metric":"psnr","value":"50.6214","bitrate":"1307","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400505937_x264_git_200.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/f5210a11-a637-4bd6-8778-c58c2f9f2c49","date":1400508032,"metric":"psnr","value":"31.2222","bitrate":"195","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"sintel_480p.mp4","filename":"cronjob_1400505937_x264_git_200.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/5fd61e2c-0363-43ff-b976-7e98c274ca11","date":1400508253,"metric":"psnr","value":"40.3304","bitrate":"181","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400505937_x264_git_400.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/f2b3caa9-ce5a-4fc3-815e-47374d0b7608","date":1400508316,"metric":"psnr","value":"35.577","bitrate":"399","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"sintel_480p.mp4","filename":"cronjob_1400505937_x264_git_400.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/06b84bb7-a5be-4cb5-a36d-0cfc10d502ba","date":1400508542,"metric":"psnr","value":"44.2471","bitrate":"346","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"bus_cif.webm","filename":"cronjob_1400505937_x264_git_800.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/e7e325f2-3b43-41b7-af6b-0d3376e7035d","date":1400508605,"metric":"psnr","value":"39.948","bitrate":"800","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"git:\/\/git.videolan.org\/x264.git","source":"sintel_480p.mp4","filename":"cronjob_1400505937_x264_git_800.mp4","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/1dcb3409-7a3c-4d47-892a-6612f3dade0a","date":1400508836,"metric":"psnr","value":"47.6285","bitrate":"669","git_commit":"ac7644073ac28d19c9cf048849bbcd515713e426"},{"git_url":"https:\/\/github.com\/videolan\/x265","source":"bus_cif.webm","filename":"out33.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/95414e72-3ad9-4195-a6fa-c7c7ae6c102a","date":1400444716,"metric":"psnr","value":"7.55474","bitrate":"216","git_commit":"d2051f9544434612a105d2f5267db23018cb3454"},{"git_url":"https:\/\/github.com\/videolan\/x265","source":"bus_cif.webm","filename":"out34.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/e784c336-64ac-4fd4-acf0-15df63c9a945","date":1400444927,"metric":"psnr","value":"7.55474","bitrate":"216","git_commit":"d2051f9544434612a105d2f5267db23018cb3454"},{"git_url":"https:\/\/github.com\/videolan\/x265","source":"bus_cif.webm","filename":"out36.webm","url":"http:\/\/duckyduck.gnugen.ch\/webui\/media\/force_download\/28b841e5-4771-4a2c-b1d8-25d6efe9d67c","date":1400445399,"metric":"psnr","value":"7.55474","bitrate":"216","git_commit":"d2051f9544434612a105d2f5267db23018cb3454"}];
        generateSplitView(data);
    }
});

function generateSplitView(videoList) {
    var TIME_STEP = 1.0 / 24.0;

    var addUrlForm = document.getElementById("addUrlForm");
    var backwardButton = document.getElementById("backwardButton");
    var forwardButton = document.getElementById("forwardButton");
    var getLinkButton = document.getElementById("getLinkButton");
    var getLinkUrl = document.getElementById("getLinkUrl");
    var inlineStyle = document.getElementById("inlineStyle");
    var leftImgDiv = document.getElementById("leftImgDiv");
    var leftVidDiv = document.getElementById("leftVidDiv");
    var localFile = document.getElementById("localFile");
    var playButton = document.getElementById("playButton");
    var rateForm = document.getElementById("rateForm");
    var rateInput = document.getElementById("rateInput");
    var rightImgDiv = document.getElementById("rightImgDiv");
    var rightVidDiv = document.getElementById("rightVidDiv");
    var seekSlider = document.getElementById("seekSlider");
    var selectA = document.getElementById("selectA");
    var selectB = document.getElementById("selectB");
    var splitSlider = document.getElementById("splitSlider");
    var videoUrl = document.getElementById("videoUrl");
    var viewLink = document.getElementById("viewLink");
    var leftInfoDiv = document.getElementById("leftInfoDiv");
    var rightInfoDiv = document.getElementById("rightInfoDiv");
    var blindInfoDiv = document.getElementById("blindInfoDiv");


    var mapEncoder = new Object();
    mapEncoder["https://github.com/videolan/x265"] = "x265";
    mapEncoder["git://git.videolan.org/x264.git"] = "x264";
    mapEncoder["https://chromium.googlesource.com/webm/libvpx"] = "libvpx";

    // Create the medias
    var leftImg = new Image();
    leftImg.id = "leftImg";
    var rightImg = new Image();
    rightImg.id = "rightImg";

    var leftVid = document.createElement("video");
    leftVid.id = "leftVid";
    leftVid.dataset.mediagroup = "splitvideos";
    var rightVid = document.createElement("video");
    rightVid.id = "rightVid";
    rightVid.dataset.mediagroup = "splitvideos";

    var vp8Fallback = document.createElement("source");
    vp8Fallback.src = "./samples/black.webm";
    var h264Fallback = document.createElement("source");
    h264Fallback.src = "./samples/black.mp4";

    $(leftVid).append($([vp8Fallback, h264Fallback]).clone());
    $(rightVid).append($([vp8Fallback, h264Fallback]).clone());

    mediaGroupSetup([leftVid, rightVid]);

    var controller = leftVid.controllerShim;

    var mediaURLArray = new Array();

    var playIcon = '<span class="glyphicon glyphicon-play"></span>';
    var pauseIcon = '<span class="glyphicon glyphicon-pause"></span>';

    function loadMedia(name, thisParam, thisImg, thisVid, otherVid) {
        var ext = name.split('.').pop();

        uri.setSearch(thisParam, name);

        if (ext == "gif" || ext == "jpg" || ext == "jpeg" || ext == "png") {
            var oldName = thisImg.src;
            thisImg.src = mediaURLArray[name] || name;
            thisImg.style.display = "";
            thisVid.style.display = "none";
            if (oldName == name && thisImg == leftImg) {
                // The load event won't be fired so we need to call the callback ourselves
                onLeftImgLoaded();
            }
        } else {
            thisVid.src = mediaURLArray[name] || name;
            thisVid.style.display = "";
            thisImg.style.display = "none";
        }
    }

    function formatDate(date) {
        return '{0} {1}'.format(
            date.toLocaleDateString(),
            date.toLocaleTimeString()
        );
    }

    /* source:
     * http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery */
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
    };

    function loadInfo(name, genSelect, genInfoDiv) {
        var filename = name.split('/').pop();

        genInfoDiv.style.width = $(genSelect).width() + "px";

        var infoDivContent = "";
        $.each(videoList, function(i, v) {
            if (v.url==name) {
                infoDivContent = "<strong><a href=" + v.git_url + ">" + v.git_url + "</a></br>" + v.bitrate + " kb/s</strong>";
            }
        });

        genInfoDiv.innerHTML = infoDivContent;
    }

    function loadLeftMedia(name) {
        loadMedia(name, "left", leftImg, leftVid, rightVid);
        loadInfo(name, selectA, leftInfoDiv);
    }
    function loadRightMedia(name) {
        loadMedia(name, "right", rightImg, rightVid, leftVid);
        loadInfo(name, selectB, rightInfoDiv);
    }

    $(blindInfoDiv).on('hidden.bs.collapse', function () {
        var rand = Math.random();

        if (rand < 0.5) {
            // Invert video position
            loadLeftMedia($(selectB).val());
            loadRightMedia($(selectA).val());
            var selectA_tmp = $(selectA).val();
            $(selectA).val($(selectB).val());
            $(selectB).val(selectA_tmp);
        }

        loadVid();
    });

    $(selectA).change(function() {
        loadLeftMedia($(this).val());
        loadVid();
    });

    $(selectB).change(function() {
        loadRightMedia($(this).val());
        loadVid();
    });

    function loadVid() {
        leftVid.load();
        rightVid.load();
    }

    function onLeftLoaded(width, height) {
        splitSlider.style.top = height / 2 + "px";

        // There doesn't seem to be a less ugly way to change the style of these
        // pseudo-elements.
        inlineStyle.innerHTML =
            "#splitSlider::-webkit-slider-thumb { height:" + height + "px; }\n" +
            "#splitSlider::-moz-range-thumb { height:" + height + "px; }\n" +
            "#splitSlider::-moz-range-track { height:" + height + "px; }";

        splitSlider.max = width;
        splitSlider.style.width = splitSlider.max + "px";
        splitSlider.value = splitSlider.max / 2;
        splitSlider.oninput = function() {
            leftVidDiv.style.width = this.value + "px";
            leftImgDiv.style.width = this.value + "px";
        };
        splitSlider.oninput();

        rightVid.style.width = width + "px";
        rightVid.style.height = height + "px";
        rightImg.style.width = width + "px";
        rightImg.style.height = height + "px";

        document.getElementById("playButton").innerHTML = playIcon;

        controller.muted = true;

        seekSlider.value = 0;
    }

    function onLeftImgLoaded() {
        if (leftImg.style.display != 'none') {
            onLeftLoaded(leftImg.naturalWidth, leftImg.naturalHeight);
        }
    }

    function onLeftVidLoaded() {
        if (leftVid.style.display != 'none') {
            onLeftLoaded(leftVid.videoWidth, leftVid.videoHeight);
        }
    }

    $(leftImg).on("load", function() {
        onLeftImgLoaded();
    });

    $(leftVid).on("loadeddata", function() {
        onLeftVidLoaded();
    }).on("ended", function() {
        // Loop the videos
        controller.currentTime = 0;
        controller.unpause();
    }).on("timeupdate", function() {
        seekSlider.value = controller.currentTime / controller.duration;
    });

    $(seekSlider).on("input", function() {
        controller.currentTime = this.value * controller.duration;
    }).on("mousedown", function() {
        controller.pause();
    }).on("mouseup", function() {
        // If we were playing before seeking, start playing again
        if (playButton.innerHTML.trim() == pauseIcon) {
            controller.play();
        }
    });

    function controllerPlaying() {
        return controller.playbackState == "playing";
    }

    $(playButton).click(function() {
        if (controllerPlaying()) {
            controller.pause();
            this.innerHTML = playIcon;
        } else {
            controller.play();
            this.innerHTML = pauseIcon;
        }
    });

    $(backwardButton).click(function() {
        if (controllerPlaying()) {
            controller.pause();
        }
        controller.currentTime -= TIME_STEP;
    });

    $(forwardButton).click(function() {
        if (controllerPlaying()) {
            controller.pause();
        }
        controller.currentTime += TIME_STEP;
    });

    $(rateForm).submit(function() {
        // Don't actually submit the form, we just want to validate it
        return false;
    });
    $(rateInput).on("input", function() {
        if (!this.checkValidity()) {
            return;
        }
        controller.playbackRate = controller.defaultPlaybackRate = this.value;
    });

    $(getLinkButton).click(function() {
        uri.setSearch("time", controller.currentTime);
        getLinkUrl.value = uri.href();
        getLinkUrl.select();
    });

    $.fn.optGroups = function(labelText) {
        var groups = this.children("optgroup[label='" + labelText + "']");
        if (groups.length === 0) {
            this.append($("<optgroup/>", {label: labelText}));
            groups = this.children("optgroup[label='" + labelText + "']");
        }
        return groups;
    };

    function addUrl(url) {
        var existingUrl =
            $(".mediaSelector option").filter(function() {
                return this.value === url;
            }).length !== 0;
        if (!existingUrl) {
            var urlGroups = $(".mediaSelector").optGroups("URLs");
            urlGroups.append($("<option/>", {text: url}));
        }
    }

    $(addUrlForm).submit(function() {
        addUrl(videoUrl.value);
        videoUrl.value = "";

        // Don't actually submit the form, we just want to validate it
        return false;
    });

    $(localFile).change(function(event) {
        var files = event.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('video.*') && !f.type.match('image.*')) {
                console.warn("Ignoring local file " + f.name + " with unsupported type " + f.type);
                continue;
            }
            var localGroups = $(".mediaSelector").optGroups("Local files");
            localGroups.append($("<option/>", {text: f.name}));
            mediaURLArray[f.name] = window.URL.createObjectURL(f);
        }
    });

    // Keyboard shortcuts

    Mousetrap.stopCallback = function(e, element, combo) {
        // Ignore the shortcuts for these elements only
        return element.tagName == "SELECT" || element.tagName == "TEXTAREA" ||
            (element.tagName == "INPUT" &&
             (element.type == "number" || element.type == "text" || element.type == "url"));
    };

    Mousetrap.bind("space", function() {
        $(playButton).click();
        return false; // prevent default behavior
    });
    Mousetrap.bind("h", function() {
        $(backwardButton).click();
    });
    Mousetrap.bind("l", function() {
        $(forwardButton).click();
    });
    Mousetrap.bind("1", function() {
        $('#viewNav a[data-css="./splitview.css"]').tab('show');
    });
    Mousetrap.bind("2", function() {
        $('#viewNav a[data-css="./vertview.css"]').tab('show');
    });
    Mousetrap.bind("3", function() {
        $('#viewNav a[data-css="./horizview.css"]').tab('show');
    });
    Mousetrap.bind("4", function() {
        $('#viewNav a[data-css="./leftview.css"]').tab('show');
    });
    Mousetrap.bind("5", function() {
        $('#viewNav a[data-css="./rightview.css"]').tab('show');
    });

    // Bootstrap tabs control
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        viewLink.href = e.target.dataset.css;
    });

    var defaultParams = {
        "left": videoList[videoList.length-2],
        "right": videoList[videoList.length-1]
    };
    var uri = new URI(location.href);
    var params = uri.search(true);


    if (params.time) {
        var leftLoaded = false;
        var rightLoaded = false;

        // We need to wait until both videos are loaded before we can change
        // the controller currentTime
        $(leftVid).one("loadeddata", function() {
            if (rightLoaded) {
                controller.currentTime = params.time;
            }
            leftLoaded = true;
        });
        $(rightVid).one("loadeddata", function() {
            if (leftLoaded) {
                controller.currentTime = params.time;
            }
            rightLoaded = true;
        });
    }

    // Trying to load an unplayable video in a video tag will make it impossible
    // to subsequently load any other video in that tag, so we need to be careful
    function canPlay(media) {
        if (media.git_url == "H.264") {
            return canPlayH264;
        }
        if (media.git_url == "VP9") {
            return canPlayVP9;
        }
        return true;
    }

    $.each(videoList, function(i, v) {
        if (canPlay(v)) {
            var groups = $(".mediaSelector").optGroups(v.source);
            groups.append($("<option/>", {text: mapEncoder[v.git_url] + " - " + v.bitrate + " kb/s - " + formatDate(new Date(v.date*1000)) , value: v.url}));
        }
    });
    // Load the medias
    if (params.left) {
        addUrl(params.left);
        loadLeftMedia(params.left);
    } else if (canPlay(defaultParams.left)) {
        loadLeftMedia(defaultParams.left.url);
    } else {
        leftImg.style.display = "none";
    }
    if (params.right) {
        addUrl(params.right);
        loadRightMedia(params.right);
    } else if (canPlay(defaultParams.right)) {
        loadRightMedia(defaultParams.right.url);
    } else {
        rightImg.style.display = "none";
    }

    $(leftVidDiv).append(leftVid);
    $(rightVidDiv).append(rightVid);

    if (leftImg.src === "") {
        leftImg.src = "./samples/black.png";
    }
    if (rightImg.src === "") {
        rightImg.src = "./samples/black.png";
    }
    $(leftImgDiv).append(leftImg);
    $(rightImgDiv).append(rightImg);


    $(selectA).val(uri.search(true).left);
    $(selectB).val(uri.search(true).right);
}
