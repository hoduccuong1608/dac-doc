/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import SearchBar from "@theme/SearchBar";
import Toggle from "@theme/Toggle";
import useThemeContext from "@theme/hooks/useThemeContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import useHideableNavbar from "@theme/hooks/useHideableNavbar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll";
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize";
import NavbarItem from "@theme/NavbarItem";
import Logo from "@theme/Logo";
import IconMenu from "@theme/IconMenu";
import { Redirect, useLocation } from "@docusaurus/router";
import styles from "./styles.module.css"; // retrocompatible with v1
import html2pdf from "html2pdf.js";

const DefaultNavItemPosition = "right"; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left"
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right"
  );
  return {
    leftItems,
    rightItems,
  };
}
let portal;
function getListItem(items, pathname) {
  if (!portal) {
    portal = pathname.split("/")[2] || "dac";
    if (portal === "spdv") {
      portal = "dev";
    }
    if (!["admin", "dev", "dac"].includes(portal)) {
      portal = "dac";
    }
  }

  return items.filter((item) => {
    if (!item.docId) {
      return true;
    }
    if (item.docId.startsWith("spdv")) {
      return true;
    }
    if (item.docId.startsWith(portal)) {
      return true;
    }
    return false;
  });
}
function Navbar() {
  const { pathname } = useLocation();
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
  const [sidebarShown, setSidebarShown] = useState(false);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  useLockBodyScroll(sidebarShown);
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const onToggleChange = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const hasSearchNavbarItem = items.some((item) => item.type === "search");
  const { leftItems, rightItems } = splitNavItemsByPosition(items);
  const [realLeftItems] = useState(getListItem(leftItems, pathname));

  const downloadPDF = () => {
    // Sử dụng document.getElementsByTagName để lấy thẻ article
    const article = document.getElementsByTagName("article")[0]; // Lấy phần tử article đầu tiên
    console.log(article);

    if (article) {
      const opt = {
        margin: 0.5,
        filename: "article.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, allowTaint: true, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // Tạo PDF từ thẻ article
      html2pdf().from(article).set(opt).save();
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={clsx("navbar", "navbar--fixed-top", {
        "navbar--dark": style === "dark",
        "navbar--primary": style === "primary",
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}
    >
      <div className="navbar__inner container">
        <div className="navbar__items">
          {items != null && items.length !== 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <IconMenu />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {realLeftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!disableColorModeSwitch && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          {!hasSearchNavbarItem && <SearchBar />}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => downloadPDF()}
            style={{
              outline: "none",
              marginLeft: "1rem",
              padding: "0.5rem 0.75rem",
              height: "fit-content",
              border: "none",
              backgroundColor: "#6374ae",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              border: "1px solid transparent",
            }}
          >
            PDF
          </button>
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
            onClick={hideSidebar}
          />
          {!disableColorModeSwitch && sidebarShown && (
            <Toggle checked={isDarkTheme} onChange={onToggleChange} />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem
                  mobile
                  {...item} // TODO fix typing
                  onClick={hideSidebar}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
